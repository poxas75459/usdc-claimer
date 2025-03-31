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
    "2uSVh34moU81GWNMTDp3yCb4rcLrbevqWDoZPEEhHtMc4GzeXi6KqQzzmAqsBKQbxiiPTnWJDq3suyrwsnBf55Ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hUEcQfifwrYfeVacQxUfPmn9tyFUT6tnAFoUD1mu6gSNM1mppVs3sGpCZXpTDn8nXiqQhDBXNijbTnB3K39gPiY",
  "key1": "2Sj4Wg9MznbmSHMRei5cM4Mxwd4qmeB38tpHMpjcwcXaNgAPmAs3bcotKbcqD3FbeYt7dzFSC3d1hQHGY3zgb8CL",
  "key2": "3fAcuRXt36aRiedrwDi1aqh4BZNFWYmYTaSGnQwyhNcsHawE6D2J7VyA5BUYdubagtTCfnEbCs644XzowVDNLqFC",
  "key3": "uii5nMSH1yPMzGpFG3HeW3VNAKXgzbaSrLb8mr7AdCehbNoYo4A1t59bb8p9y2FjDq9W4Hsu9gN1BT59x1DujHU",
  "key4": "5stabx4NzUn2HH9puAkR1WifBZDRxxprpyWmxpmQ6jQyPVS1GoLGhWvdzCnq7a9EdbMrZyW58mnQSo6pLcJMetpP",
  "key5": "5KGi1o9VDY2gvZRc75kNePzQFRkpGcEp1uzCjZNszQPYSh3AWxwzW85VGFUiTvifF6MYr4hsUCDdwAG7JUSg5BRb",
  "key6": "5ammt8ccyPzjpzMfX8Ateushcpttx26Gfr7iq1dLay6YrwYQSTotWGnabW3tAbttxU2GxTvqXPn97Vusp2Ex7XKB",
  "key7": "4ZtsKjaF7GmmWz33a9vfZQHoYQhFkVBrFvyY92eQfNemcz3XxKtqitkn6zaa26Utkk4xxCLDtm9n2AkG9fREpsBG",
  "key8": "FYqsbivrtKHWbFYr3CVuchamKYaF4WHb3tcPNzaEXcAZaYZyYjAjRwYe55qxzipMnFu7LctPbvtFvStQGvk3iLH",
  "key9": "XMocvrXShRWGMQEEF2tNyLYBLbTjjH9DL9k18k7zaRqh4sM5eP8MurFYkRS5WmXQsCU1v2WZu1bK1ir1dfKT6qr",
  "key10": "2iPgD2cmv9r928o4RvgxHQ4E8495MDytFyEGJUa8jWdUracy2SFuyECyPMPRMF8K6yLFiDsBaWnotrkXCbPeKjEj",
  "key11": "4ghviBLtGS6ose7WsNoJUWWvnmnftFoUpTFvvZJ81dviMfw1fKbPfsooFqefC9dC4WBDGAoQiFfVhMZYRJBkcmYL",
  "key12": "2wsKokrEwgFSyuyw77qX8HCu3FTDC4ieY6vsyoU3Dq2jwrX9V6kgxnrSBvsuaoMhPF1RfZT6g9GudDxfDYNVB15u",
  "key13": "2GBQHAj51RmPQkqcEBcabvfq68nWEy736Qtjhwk8AgKSnXBSUh2ji1qvDJcx3PpMdH5Zc1ojUBYsphgY26Zp5MQL",
  "key14": "3xGRWvMLBvaFr3AHJxHkAJFZ52VfV7JDzfMVHVQScTTHTFN9cdv4dWkdEXQNGoqrj86BTkRPHFrTZPPgrYskWSD6",
  "key15": "638DDsNZ5GPVur7i7QPp8zNk3CpWnS9ugZ986FfjRfxEi7GUribq83jGTsCfd9J4zjsW39pZj6MGdTJvie9ZVkPt",
  "key16": "4eZAftxnDUfJfwLKpkuwhvZFKMaAUXsMqZGBsuypyEprpD6vzQYbPDrRaNTSAYaXEqCMDfeoCDC548yxpoW7LseY",
  "key17": "n9BwD3MSuRG6JvSvnUEqaDKRyH8VbnBamwNpuMyC4vhbHSGdFgngoQ7cVmT7H7ffamHwMP5AnwKmCcHpwvmi48h",
  "key18": "2e1LMLQ4QdySCFtrXFZeYiTEtzhgAbDSVUvRZWdhuYA1yi9dmugPKPpNTrs5yMWA9VfZorwW1GD2fqLAguTQimmz",
  "key19": "4PXR82wkyrjBLrFtRTEEhnF7e66D3EvFAgCXRCpN2gFWPd62qrD34im9WorpKMcg2gwsBkXcgfmvrmg3aLDbbdhE",
  "key20": "3chHjBSB3C3R7412QxXwTJwTE6ZEkDT5NRZjSp18yKoWnY9SRL77WsKpD9D7PQPMs3sNtJsyRTR3KExHfKV262YK",
  "key21": "5kFPMNHM8e2aprvikKMGP4dJ4pAiGZ8KuNXQBJVdNgXRHa17Ld6XkSNx3whqU4VrMHMsXpEwsDs54AEWMVEX3MPb",
  "key22": "65KtovyPABzbJBUVzApMguCug3LAq7zsoXFHG6QwH6rZwR3Q2fREzpfLhV1WyvsSiqNFud5QQ8RWZUbVBWbhGXze",
  "key23": "ZGbA5CKdfNudMsMmwcDX8YqL7B3UKdTrD6RHZnTvj8g99NTzUpT24E7skvJAEp6ZTYPTNr58s4SbLdiqf2xQxLh",
  "key24": "3QACiUGiaofTsA81MBroierHkp7GTrP1Zqh2qKBXNNrdH5XnSweejqxkLzPGcozwRbdpBS6J8DmGk79KTeTK81PS",
  "key25": "2mhKA6oauz8EiS8KWi1VWXWj1bWnEwKqaRi4D4i4aK8dexPD2J48Jh5eE18w1Ti56EWoZLXZZyK5yrBwf1SCgJSj",
  "key26": "3uDDADF3b2WQXqRg6eCkyFzTUpSuvmgYFK9VrHFJUjhEaaCUkMaLovjiZt61hYtauFij8Jpj5jY9GxGFxKrNnvXG",
  "key27": "wUp8FPTuTwdo8ofiqNY4WhJXnA3kUQ9pujpdpKAtwsHE4AGPiFUxk8FfRTncuJjSsmySnGh2mRKmMyHQgL1Ssz9",
  "key28": "47zyviHooaEUb8cbh1mHNGDjBiozzUQSoKti3Wp3QJHxsG27rcmmUtUKvTUyFHcdAJpAc5kp7V6cvexWJVDpVzSu",
  "key29": "5pukA2Sz3veYERSxsiB9eFHqju3mXyDkEYwRMzjX5PEGTkSQEbCyv2xkvJeuMUgUereX9kVjqGVf6727R7YQpzUa",
  "key30": "4jUAKNPjEyVvrBNHJRdpZz5FPVNr1XfaJWGZs6PTJuYviw8HNFULrgKhYjptSGGXGuuvZBw3RLT2resXyTBnsJn3",
  "key31": "57dxMrLqENC397fnpqQbNUwgcizpjm383x5uYmSVTpQ28zjFVqa14Piycx88DRAgj66djfb8QL9uEGhJ2pR5BXF1",
  "key32": "3TBkfWwvNxkM6Ju1MyW87kg6Pwk4tQ4DvcSMdsddYgjoUhR27uqYoBi2TMFCCVNuHfiun3hCTFN29a5JLTYq3nsX",
  "key33": "3zNgZHBNCm6PaLKGLXKtPG5h5ig3Hwhk7F5u2TxkmbQ3VLiKtHeYjn71THxfQQ1cBKT82NkCfHXz7yCBuo9Ya1iD",
  "key34": "4on5zgmQJ8u4qkDR4oq5gu61Ux7yr76gKxa4wGi1gD4NFYwo1WjLY5HrARdnJSzjsQZm3P11TiPMMRnwAoMVL2rk",
  "key35": "MCbo9LgpkoVbcjXB9iUwqBZUwzsHf2svYeuQE7vpCo8Bz8SfFy4hkCCbsFQEC9UUGR1NmEgq59hfN2jWKP694Ge",
  "key36": "22QerVi8v4KNDQZoCjvW4pYmssSD7SLRJTCfpLLSgeMx2z1qeuc1X8Wsns2AYn43RcEmnTsqkNSYFHvwhfyNGe1p",
  "key37": "5t9ZeRzxdG49xYj9VYVERfF3UbLdk3UsRfP6ditdVMZ8hDdW6fee1qCum7UWyy5K56SY59SQuZREERDwtuk3VaB1",
  "key38": "av9caU2GDzot5ouNAXB8AsSVV3sKdHEQ7yZj1So4HYZvMcpqNWYYfMQZFQb6MhUuJWT1NMmdctacJvsU8meFbdq"
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
