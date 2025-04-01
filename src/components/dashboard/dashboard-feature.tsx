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
    "3HNehy6dmhcbdc9TfSbGiDHQzevdfp7ScTr49LZs2PsqfQWV4f41JENbiztViZGuF89tgiiMaoZ4MCCkHNXtuejX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SCmedRYGjLyr3uC53uxJ9cqNeFYgL8PYioiEATzgcSb8YtvyCjuHFhXqC5hcGmBRsXozTB573URTNp6HCGRXCsb",
  "key1": "5ZD9CRgmjT1RJbs5peQ19r26HYaCKyDDNicyyr5Gjvd5xa7mTf8USx838hZ4h2aEKrqnjHoLwPn9iedc3VkJrMXN",
  "key2": "3hGQVnogvEFg6BFeEV3CDgCsy9sdrg3EQgheorw8nxRmJdGQ2bSgKaC7jVABKAhNa1GBXLWpbHVdUoLdYnyQAkzo",
  "key3": "YXNfVFoyhDe8kaqbn8vWt9nSJFDeEVSBRkDbC5jHWhH8CLpGGJbbcyJFj6Lcmf3ZzBzWv1G4fzt9fq6gr8nmt29",
  "key4": "3AFH3CQ1A86be4suSfyLAfrXAWjqd7N9a8qaRoCKyk1zBFm3DRgtWGFMXqatLDTZozFPG6SCYZG9QEZeUy3CAzy3",
  "key5": "5H8rJs9iTmbrRaDiW8qtKCfmBzZdtvMM5ZMu6fvJmYjWT848eYWBKL6MnyuKFDo6EZnE6QFpM2uyTmxFZu1qA62A",
  "key6": "5dh9JPdqUxVk5HY3Mx1FFK2Zjur5k9nX8MNEBQdGZ2XFKQGPCoTfQZeEUBnQuMEDNEhMZgLEuWH5cSq7FUFBAJ5m",
  "key7": "3atrCWF3S8z98dd2SHV7iWbUxo5eiKynJk9XM5eSXh1BcKjTJjeBcbE4EcAzRgXMjKwLj7ryXB75FwGvCfRW98HE",
  "key8": "3eNDaN8Ji2nGBbFdBPoESt1d8oH5a7V7CHbNKfdvwux8mnP3w9Wz4eNQjchi3gxt6rGgsMQjoRCBnd1yxXL3UrL2",
  "key9": "JXRcLECwDrn51aiR4Lyxi9ixunsx9afDZdrvQAJuXSp7wH9nYapq6qQkA6zG2bDVZum32Yq7EauBQGnyAnpzsqQ",
  "key10": "47TBFnUG5C5m2PEPzaYkRSTeLP2oTpoT8H6kdk4w1KttHEo76g6o3Bd3aMWgGco4KTw4aDw5vuZ8MJ5SnBwbTopu",
  "key11": "3DsrzueqzrvMVCgYXjzfxAfcnCR9e3nyhJRNf8y4oDU9kyjUDmKNQcGQNTHxmUasP5Bd3jEsXgPVFkcytyeK8SnP",
  "key12": "3NrMYYnWkAb59rYLmFfHxn4RrYS6cUSGpUSLSyBCX8NaBZoj9waTSDbpS79jgFJvkkasy2pg4dTU3TsrYLqTcSqn",
  "key13": "3AgkYjYG93YuuHpDQ9j1myozAhthx79DFZUU14FektVHSqReVbtJgYciiXZkTe4YH53D43f6hiRnx5Xqvp5fSQqi",
  "key14": "2rk1j2MYXmXqZvxTrxdDEeird1jNjt5ctSM1K2WJPhmTFM4KLb9GLdYJrrdMNkaDx3D76KyrpQcgv9RtPdgme6Mc",
  "key15": "3vzZ7sf3RFcWvyQihVVzCgjqsMVgi3TifaHQnDFccG9WjbpNXnUd58rtgj9AYGFPQVPfZQ8Ed6BeyRfecfPr3dqp",
  "key16": "4M5EZQBEB4cXQHDGMtwF3ACqpyzt7huXgKH4wRgyh7xRTdLNdDs8Rqr7QY7vgdHN9wLwNWcDXRr1jhNWbZqxxg79",
  "key17": "3o5GX7yBtYZPn7Fp8vd72aZdYPfVXtRRsmhP2JkTYFBQTL7W2BBGJEX8pUXn7UCNkxxUWX4PmAZfQpCpJDpquYBW",
  "key18": "4sv1CU7ViQ917qgGaUpgDs1MCxQik3jLrtTu53nn341hs5TDrsHGRzW2rD7gNQuyk4VgSNppdSMea6abRfBB775c",
  "key19": "475rtb2mN8FM4UAExQGYMxgkdeuSF166XMrXUZbwqSQhWNtvDYzEfbQpxnuA5nFHuFXogePX9tBd9scBGnGPr3W2",
  "key20": "jQ8MvAGbUcHZ5HDJiMS6t5sh42zET5URg5xgdHSTFXS3A4pjwSeGPL421HRUiGqBmN99nUFoT1REUKv37LNNMSa",
  "key21": "4DX4sUgv3eVZmsc76ksnPhHABA7rGovDo52rNWSVRDY2gpBFxXfWDu4pgARXin65MxvPh5FZAdR7XeW5xVTB67g9",
  "key22": "daM7DiVLsamxr8UvtNVCnTzC4MvLhdG4UzZaRxpovtBatwPwGFm9QoBs2qjpN4b5nrxaX4d61xhMAQLEswAJY9F",
  "key23": "2RhWPyykapruAoGJb3K6hUYRTHH6A16W4bwBV5gGsm7yVc3etwe6wVNDUXMCyQkAyBmKvqMuyEBA5aYnyMA9zMGR",
  "key24": "4QtXLjRfdmx5fxvNbFozRPSfi6CZmfUTsKvFR2urSwS4CFMziL2fpF66ZHCvgkHGFg785DimdUdYCFSo2VCmMnKg",
  "key25": "3mdPGLWU524JnedM86ATBt2HQv5tEkdcQGBBgpW6v4RfPmYJbxBpSL6zh2L4LAhQss1exz6AjCWe2za7F6njxSLy",
  "key26": "bYfzHeTyxthJcbadQsWaYuW8VQGmH4sx5GXFizrhAnqfNncyL5CvM8HyHwVhGnK56hJmSPCk1v8aMk9wz5cVZY8",
  "key27": "2uxmEYgS5iNcPXYZwiqSRKrjD4R55LGgYXQm9Uu8NSaiPNN8MqwMCKqQyogMfLd4FbfoUMMCWhkQnLfhyw5g5rtr",
  "key28": "3zrGBGk8DX3GhD77UeBErBzNcQW3zWjnr4QWTcnctsnuY5vvGR1yYbHyWHESXsiiXaVa58gw3x4xtRgeRC4VS7gZ",
  "key29": "o86uX5ABbcwJU9M2yQgCrFGbnCEh5FoseCJCnxx4qdABm3E1F7WjnYtaKUsFJfsjMWMEWyf4XLnWt27cERxBhkC",
  "key30": "65VFKVHGajxznSiHN7kGDU94ythNkpd6a8vnk6XJofXA6hPCA5BTckHWBZCmwxGDMdK3FJD5HoPbPTjn8bh4SdP8",
  "key31": "SwVxnZLsEv2M1ZSWNZi4Copo7oR5fhJgQgYg8own1AHNpLnobkgg7QmvonjN6YjYYWcQ7gkWzREXJ1LuUS7USR6",
  "key32": "jGsZXAng8xVcDkRwgeNUpe6RTPufvNqwqbitZDas85DEdZhZ9Jif9neEUBMs2kpwZmfauGhWk1gaPB9MrGp6uWH",
  "key33": "2d5sfnmvLjhf4Vc8h425Y8oD8zF3fH7SHuCg6HUiX5TzjoUds8PLRqLH5i4UC9vraCYgavbDL6CSBhjf3zSkTxb",
  "key34": "4hxawAWZGpHV9FHGtTH9dcPRgRUmBpAiVSjJ4jX7WmADLud9t97cdEeuePq4PThAy254nfJ3UGvP8R3L8255FYWG",
  "key35": "4WuguELGnTU41y1vMbGPHMQZ7wTVn8V2HmBeFNyuTLio6eWFSbeNaDXDtFqYGTPH81btMHhjnAxoZn7LzcVj5hfE",
  "key36": "4TGHtLwRmegcXnvb3t4SmNe7JoKRfhB1FsTCFWwrnLoKna2hrHrG5f8Aw33VuUy22Mn3t6deVQX8Z7xMmAwQeLo",
  "key37": "2kYp6u2JiH41ShyS4xL13TDb2aknc1zQkf6QzhQvxPiHRe6qpN66kUoZwc6HbuH45HQD2Q6BUsnpTuUKCf6E6LaV",
  "key38": "2t9y2GVya33DG3n3n3tm8nXCUsuShACtMg1e93BddouwQGTEM87Xq2yyPdvp1zwW465LZkZR96GnQTXGPft8je97",
  "key39": "1229beqfkpaf5Zqzjp1aPiXjmd9MT19zXLtsqzKGW1jGfLcLUanSVite75A9MPkRNQpaBPWbZ1qwe5GvsYYvtmdd",
  "key40": "2pn7akLfxowWH5n3hATLfBnbEa6jGJMTE1zFEh9CNqffBDM7F1mcJRYAqDWgnSGYCwmde8ZPTATmJbFU8FS4xMsM",
  "key41": "3xdGPK8YQDiyoVxXNEm7VttaLam2oVTb5XBo2UVhzPCHEbjg3Yaaki3r6T8KiqJ4eExEQJba35VpLGrWsMWhD8cC",
  "key42": "43i8zYXgkDGFgaMEQdu55rTJBU4ynAVxdKJKUdiS9JMUt1aEhRECsQBD54FXE4LFPa9jeBg82ySkiiwJoNYrPHdb",
  "key43": "RmyjKYBeZ6Y4XrZJp3Q1kWCQLB7gd2yYMiwLVUtpYjaVfWscuszS3UWikSJRpvQmoU1MtpxuXZKVet24FszUu1P",
  "key44": "kW5UmveXKKy5wpqRCXuFAoFsuUgSg5KeRcj1vee92arWevcUPYzpfAsaiFaCT6zkkAZnQuUwYFmu3z4Spg9s9PM",
  "key45": "5ETodv4TrA34SxdcsAzU7wcVJWQCSXJ28fegLNfSeqSDGJUdaiZP7mosxdLtSjs9aY27FY5Gba3MUqGBAuzK4AvM",
  "key46": "65pgeQ3rZge7gbVPb3uYRYU4A5vTsyXecQhEax8Jt8QL1oS5fYWw8hvyFLvFcGbLAX1BjcCQB4XXT4NNkMVxmZyo"
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
