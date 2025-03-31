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
    "2jRM6B67F5vNkMTnesCoFNozEFB8TsK47HSqRtYaiqn9Kn2H8StPh9pbod2cX6rwsDw4Saz5H9evE53ThvcGvz33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kjmgHd9ceb8kWwP6sbBwMTN9kAcd3VF3xhdqryGAzXT545GtNx6hqiopxf9536kCnDo1z9e9xUCVcJ3sEckDNCi",
  "key1": "nq4tu6oKTwmap1GCCjyFoMgPr51aq7ahPU5mUxgivRTBprRgmUynuSUW4EgcvjpJxcmyLsc76DG1L6idCEvtghf",
  "key2": "5MS7UG74Eg46pQLm75YPR9JqQAQR4qSsCQkngVmy2J262TW97PmNY6avSmkdGFqvEqHuKG4Z8VVSADwn8jNRTCq4",
  "key3": "3RfkRnSyFuSkqqusvbPqFSVUnw1gTWg3twtULBh6TXKQByEYVjR2HH7uU4nZCB646ybAhH7KaiKoUhei5zBx24AB",
  "key4": "2GFALXEGWBnhZ39ca1y8ujKoQzGKmx6CaXH8wbpEy2SymNPiMPbad7aEjs1SjJ37m1T5jzxzDwXCSc652rxjLigt",
  "key5": "nDGY9wMnG5CdD28kk926jDkbuP5DHa4SWrLha9vK86epomm77BnqdBxFt1zDtFkL5pVUTTsGbmuo1wLZCx345by",
  "key6": "3LbE9TxNau4criBY85uJVBWNKMPdMqkHjc78QkGtJwkByRpbwBd4JEY4GVjJ8eTC4vpHTBjaamWxe4fEKqcVrMTY",
  "key7": "27pfgprfEmEfx5RYqG1BnRHg1hKmNyBxwT2oQXnpjFRNrFQUQq3WjnPReg8Xhh937bwZ3MgW3ugPjVLSzEs6ESdp",
  "key8": "8pVzxvxmsc5xjbuDXr3rezzBzaGbZwD7ETpd1F6xbUrAzcPogoW4PsWka2HnjiV99UFVtRfPce4K9y8pAC8oCXA",
  "key9": "G12MgxSqcMoqj8UY3dNuEhaPcCzUZnrnHMHpwy5ePovWXx3ocQ5JqzJXs6qXn9mecnnv7rgh3pUEVdnSKNEDx4F",
  "key10": "4kBB8uw9Q8DvYq9ht6ijkij4z6KxRixGiWMuP977Me8YUf9xe9HdpWxv5iqhkvpKCBkdKzzKr1vA74DbdbMNj52s",
  "key11": "UqvKzmYsGiim1bdPJc7x7EYKFYF1Hv8SG86dUucb7qEyNyc9LuKhMsx4cC5RdFxQDf6XDDgJByFsoG4eG2fTbsd",
  "key12": "5PbiNiAcrvCzNz36s6cDFmw7vEeTY2ommf1cPC2aNhLYhCov23Sa8zj37sD77PLVtTPsJbMu1fw9PiPtD12wP4yV",
  "key13": "34cWGELFqtg9zwH1M5GypaixWkwk3J5cvuTEmAz1vUKHqg4oXya2SGK4cwrzGStKPMrMcE6jZQXuQ6ve38xRr34D",
  "key14": "25HBK84PRX5wq3g8nsNrCWeaLSzeK4vAmjgQgCQqmP4J7dB6mRfhiyvJs62RCRKhTZamu8ynjo5pYXavzcuTczzh",
  "key15": "3e3n5WziDPLjEmRSE1p1gnvBg6W2fzwNEZz7Zan4rmHCM92Y8J1uhfkHoVjT21FuVLpENjtH3HqtS785zq2mQsbf",
  "key16": "28pDNrnqpX9TuWwNWuQUa1WT2PkyyMySXSJYtCxJrSYmg6xcus8qaQY8Qob7LRSrN6snubnTpBNTqhW3yeVpvtCs",
  "key17": "GTNYu9C7PZMsyh6VHjXgbwZ3wr65gSk5Mgp1ZFF5Cu2wkxNgwshE65xvjK68FnjvzYQSgyneTxS8eSf6zBxgyRb",
  "key18": "3BQuynYnNzznHtNJZSgTJtEnuaMnrnH8pk1aULpFawEftFMzPMGT1k5YhPbARpyseYdzWvrSVZamepCTTtcfwXYC",
  "key19": "42HCV1RarAcdbsGfLnEWWZUkB6Yom8ajpKadmG2D2d95ZPJe8vFP5gkeor8rjEuNzTeepb5D3YcTdk5mmw5y91FZ",
  "key20": "4mHuKuonew8QyffaYpBj21saNu77D5XrJEBwawfDvvACpcjJkcd2DqARAQ3qvrYenoqYyGBpbHv25XtgAke95sU5",
  "key21": "vArSk352ZitEA5Kt3Fyhz9FHrhYFQ3wRN28MS6mwybTxa35iPUm5Rpd9qmUNHWYxVoh2ge92zsQQQKPZ8NaXVZy",
  "key22": "2auSmxm8H9edrVrUXDHeqJLssMbVjWBwj7iS1NwXkdHuZgcYBy8z7VeuDhL8RdPVsoj9LddhZ2p4UZFbjHENrvSx",
  "key23": "D4muSrS12SgmtdveJ5miBtB68UuGJnAg6nAsi6muQH2t1C54yRkP7roak2WE3Feqo8PLJKbgsgX95n4p9FiYUXJ",
  "key24": "4JrK3s4y3nCtr9YpRBoiS4naTx59ns6DdkGTLxpAhbjeSrvsjBomcUWDNPpkQzGYh83LyqjnKMWJ92CeWCqCLYGV",
  "key25": "5CuUX8TFFe9SYxcJ6gmavnjPKQdh3GuhMYKiFHYn9mrPjwe5gxKXwQZStYDuBMK9Rig6Grcd7yjn4B3y3CjWwXdG",
  "key26": "4CPyzXQ3kkqha5bpKkncgPqqJQqRPyD5DpWBPc4Vrh3KiJbZzzgqxae6wHnPdTbEcwcq3vZfsuTrktRf9UXcssKw",
  "key27": "3eEu5jBgePt876HKcpiepbbrBBYNDgFqBYypYK9A3cJfGZ27cYgDHuS2chWCo2pcFt5YRDQkAqZRLmDmxSctYPbj",
  "key28": "5BJ8sMEaM49xjxHet14zqMPRXZ25AovcC8Gj1aJxNuq4wH2AfD6eW7mdy5TLXvsXEC3meaKHEdkHn7Nv5ALHpt7L",
  "key29": "CUy7N629V4UWE2MkcqmpZnhhigkgrGZZ7rYaHKmGfh1CjkWQgM9C8LwZMNXLg7q9HuY1YmbNTix4t3ZNSYMZgHS",
  "key30": "5XoUGcCDp6Tzca4VgZTyPE1t44ZWFqpPstTQCETCM2Bac1L4D6YDzwmzyn7mtkENEiahi23YGVPYQkQoZVXRx8K5",
  "key31": "2D5QMzdenJmyLG7U55MTzkYf1QLGjGw3F1nYkLDNm8Zv528VChYVuaqRynWDBQo9FZyvNADKxEyaTXD7bHhMxDf1",
  "key32": "2YhVnPmXGANZsvuPnzBNHuuMybnifs4AwE9nQGeVU4Mmn52W4RRe9BAWhtbsSo1JYH7awtM3zEiLmxUKg4zgVJxH",
  "key33": "3EQAzuieviB97SxCrgpRnF4KPRStZ3wgouyyDTPx2JD1GGSbK1Rb6yAKs9KekF5WL3YkwDLQ838HTsYPNzt2jrZ8",
  "key34": "5PXZmwnp9yvEXm3DEGgyKnTNmuZreJkeAk2Qr6Xpd4yKtRe9qfkQGC9ntFXJerxasEPANdd1GiRX3ZiNrv8q9Xmb"
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
