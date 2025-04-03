/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2bEztb5ixP6212DxAXYfVFUQYG7pCXdchUtr5MEnPFvPu4vDpBKeLAyfaHyYpkBNHCF6HsEgTyGvxeuwMDeF7uk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67nXMkaaAeZcQBVAVtkUjCtsQzyUyCsfxvS9vDUtdmiMJsYa41ppRgfShbEtxEWRqQ3KBgxNaEWwhnBguFuzQ4FQ",
  "key1": "5YXfynWEdarFXVF1Tq6fNs2YAbnso69edTLe3AAA2pu3cqp5sLWS2m2Us5rsEtHPtmEf1SN4b6StoTPJrf8FGFk1",
  "key2": "s9KsSRv7eD4WDoKwdpbR8uPcZ5pXLiHL5gbCrvcPsFWeyJyXaau7eg12pbjNwNrHT1k2pZmPrwjGHRQVSzTXkS2",
  "key3": "3J84gXoFjLWyqEmrbZ3MopCWyGfFr11KXKhSgbwZoJzYDkfqH8qzaZx4dFFxN95Sn7ArC45PsK2qn4X3a8bNGUB8",
  "key4": "5qYciSrgjwG4ZdTAijHSi6Zaz4gwo5e48whLKbCL5HTUGio69YfCh74X7ATnyeDEZj6N3mh71iEfuDpzmG35sD2w",
  "key5": "4ATTjPestYVnbR39tFdmH9p957CqJFF8gGHLa1vwHYeYjefghtsCHCGy4iYJdmgaFGBsrNiqhoCuFGpvPiWkxZoW",
  "key6": "4sqywBSdYr16jiCESPLiFedtVhN6zTBfRoKQoQqfBTnYz6iCsYG75Cd2KvgmZJMZeDXyTDgJdh5Vpuj8jm7XB5Ny",
  "key7": "48MKT75baqWCA3fpdNfibL1rjW4qVvMgHZUKDYAv5SeWhxZNLjj7fC8sybKEAy9CJBaN5PFhfbgF58VpkbHAa2j7",
  "key8": "aWAduhjeN5JENfZ1LdrVN6WCoxRCcXRMjEWt5RuRTsr4YyCLB13gEGKJ6kPgjF5UHsuW6Hgc5FfMVopuwzvzHty",
  "key9": "2SHHfbkakFYsvRGtM2ut9tVTagKXyU1DsJMM2NzgApLqLBMUFZTyMS8iN6rk8EyJtoMoTn449s75bxydmm8KdTGd",
  "key10": "2ANtzPE8sYDW3iVDiPCccQccmEzhtgCFwLEax43QFLZvJcAenQ23mzm58ufKfKzAyN6HeHaEwmM9XTYP7RNvxguX",
  "key11": "5n96bJjwQ5HNGaqtAoX1SGanoxVrf5R4ZyFTQztxafcELZ5Nce3mMjPgoWkkumGP3fLwV5qyjMc5t7RtsvUPpbDv",
  "key12": "3Fn1aVWcDfECBz2XazvMh13jVNFqrj4x8ZsTG9GeKwEtzr38q35VYkM6v1qT3Wu93ysdJnnW3R9Rf3QVZT9V24tL",
  "key13": "7uQKzSKdGTjg6ZERHo8syH6rSxL1VrjySgAbn8n5LuUr8AG21xbqaBCLHJMBMWpnZKiuuxkBtjsZN4D5wmnV8cz",
  "key14": "2oR7KTkghcEP4PzuNoicZXGWBicGAsi3cfg3M1YtJtt9p7FkQx6veX1K7mR6mqEjRbdf5FkTQW989MaWhgHi6Bni",
  "key15": "mQC4cqYCbKu7M2go1yxRitGScTDQGVoiyT5hE5HLQRbL1qE6paqAFidcLNcBbf6kpfkhaVnoNXgMEzEZbgw3cz7",
  "key16": "95uQQAfpEVeV799LcJjS8V8FrVkBKg3DXELA5cgmbctkADgaeRmAt7ThbP3BRX1DMeZXoBBz7BgL8seVCbEt9j3",
  "key17": "4KCCrU6BZzGgrfK8Lz4guEj9dRFGtBphLmDHNuojLMXa5U7qJ2U33krJb4UUAV42TZthTCmxJTuNfYHyKPkrGbT1",
  "key18": "54gtie3hzcA5Bb4Rz8m6o99iruSEuh2bi5MmgQzbLRskCrL6rP3aPekP68Yu6CaQqGbPqfHk1kwD7RqmbAfocmgb",
  "key19": "5nmLcLq92Rako8bLy9AMzU47FsXpUqp8WmwyBgMHRrMsozzkKWNdJwGgYnY7i2jmUMpYtrFmQcMwJmbKNvrrUrvs",
  "key20": "2tkTURSWN3yKjFKSz72r4mNrfx3PLpgKyMy8heM7p6LhYWcxUib2ouhir1pAz3jXi4P5BB3dC8ZeL5LAtaPzc5KC",
  "key21": "2rA3Yue6B3TX6pSz25J1RnjnFERFwQRfFzR29bA4kKGuyc3wmhP7WoSrTXsW8FeFVNeiPvB8eU6wJrM59EEv53Kr",
  "key22": "3rENNKLreCdAmsqtYZw6Lo3bnY3dYyZuuWCyebkFHrJhStERf3nYRMRszKF8Hp6cW9Yv76mMJHZzUZyjKsA9JLrK",
  "key23": "44SUkUi4Gkr3WXaKcEYzXHPpzJ2z7ZN3QcGCgAHaMFgqgEe4yZGW6xewSF1osVVdh1xXksRAWFKpEtpBTpkYZmQ7",
  "key24": "5PXNXajGHPTNKHH4EA12AhhxJdGeb2obxhTPyg6wuWjyGXZZJ2mHXZF2CF78qRKbCvnZvp3qqHxvSEbddZVohov9",
  "key25": "25avWEx5LCMjMyPcKc6NgbBQD3GBksB1H1i9ZXQbvMvBeeVAHfrVbHhsiSwMSkV8Hc47HL2zZV91sbbVvdkDVzPN",
  "key26": "5Pn3VqTvzX8nf3U4p4WpR23tWMNtQQr5mNya6FGZG2SiAnsbkgiVf46RLf85qn33kn7yfaEK5p23w3Xs3kU45p4d",
  "key27": "343UKssUozdgo1yh5sXGryecdjhJtoyPogo7hojyYsvdMTA9xdTyaR9MoU6gDZMXRYAtcs3xFznZLizCWmxx139E",
  "key28": "5SXrB7DSny8CpcwxDUCWJRrawDaULHkmvk85qf6aMiaTgLMSbuKZPB2DnxWTpjtnLGstg4f7d68MhV2AXWjFzAwL",
  "key29": "4tZSFtbKbqCB5HGQMqCFr1uu16qdGrfXNHB1AtifttgRd4neapVsuyYZQdqkCYE64FhZefCjQfxztgH9JL9w1vi7",
  "key30": "rhiPL8ztE5rxwBNCZvnVdrR5gRxQ5YECeCaPwcDZ7vD48qXe1FMi7sQZCbRo5QY8FydK3uKikwo4Gi5yiYbhju4",
  "key31": "3Po5ASfUTMRYMgHAFVQkraGJC9X8xaG5Wp5tX9HMxAzWHLSamo22KKvTzfw6Qnf7FCuGkEFeS5RK72BWnrEPTGJA",
  "key32": "425YRgcprEVrrELUQNMZD1Do2EYYu9a3BZ5hsF5mVEVFoF53L7bXfq6qPTDrceqiX1nWaq37bLcwLfEJ2LztKg1t",
  "key33": "358MzmSRbLsdZupHKgeBwT4MDmYmEL44Hkb7XbiZfYjcX8EuHz7SHWrgeGQRD2bZo1QQBET8AY27PCu2rmcrC7Bk",
  "key34": "3GNQ3W9NuxY9dXtT6DN3CPpZUXbDgDUNLsTvoDeZjfV8J38KvPQxLK4CAMFCb7J5PLdnQ8FkDM4QqMZ4t8ppu4QC",
  "key35": "sCmU9dNjo97Szsr5QFB6KVEZAam9ArLHhaumJYoTEN4o2kQcwZDDDJaGXkhjFUAFZfxojzLueukhvBi3RF421VD",
  "key36": "2Voo8R7MMH8xzGbgj3t73dMh92FgYTKtPcAG1uaYJBQo4ziLcPf3ttA7XDjcF2ynoSsXmHEi8gqVFfBR2qNFxX52",
  "key37": "36UVE4u9L7jkvhEYZndtZpxXddcEDDfKnVgSUUvHdUGUNQpsXV7UsSj3KYUqxCPt749Pmv5EWx7N3PVChMtCNEeV",
  "key38": "QrhghAKAJXdVL8aPPP7aPBsckm8EH7kjEzCzLdBkWU1XzBptaR6wEUMWDHGqmdnLqDsq8CLmhaWWAyGEGpewzLb",
  "key39": "4x3oVTQgYZ6cmdfzrPLpbWFxG2jTDXVWf3Ft2ikjdXs1RLb2EkVWrEh5ZUb1HULdRmVcR3ePzTRr4HWbPhbzAjLN",
  "key40": "QeM9bsp4Dsz8gG3Lmqw3uVHNjEvCkSPQvxdZC4apMwNPvSr8obLV5PJ4WQGnZuQey2wHUhVUjfWYqGiqya2tQSD",
  "key41": "4s9d9A3qcQEYtZJFf4sTiXTcgn873m5tyfTKbqC54X4hmf6WPt6jZq6YBrn19MgLdmLVBNRbR5DwgyTbtuX2XS73",
  "key42": "3Er6VooPSWUG5MKMB1TcYvBumEVKmHwAoZzW361AbnNW7Hd6x8KtsExwQNuqF3EVA8ypgSKwFiw11UrbFtpLK5a9",
  "key43": "64qFjynQ3sXCKPd5TEFQYVJTPWsL1JAHpDXJjpgNnuHav32wRMUTTPrwkzHtFjDd8eUEEFtxzthaKmY9iRm1aibP"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
