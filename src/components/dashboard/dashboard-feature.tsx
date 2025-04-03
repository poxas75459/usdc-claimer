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
    "UGrZy5Ne6RausnWRJa4WVKUbJgLptPrdeFLQxcU7UgPL13JrYW6oidgxC723fedFp1ppCWfZakcXJUT7phza6Q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k3bz6B4rYWJqHMLy5zzrxmUX2tDF5zGqG3ZEHqUdkHVJ9pya8j6ueHo98REEyhg5hdoqHSAFgovAXM5u7sWLPaC",
  "key1": "4QdhbornkriDvrNH6M1f1PH1dPTmYanaapeCheX95bkXG1Ehx5yJBDVm9ofZ4xXncD1s2GTqu867ETvnuS8xjkay",
  "key2": "3qrVDuFcJVXpkVEKtW2QUWGSaNM42kSTZfzZZj7HVSUwpiRGHm89NhJE7atnKVasMVVRPxYtSiB9Nr3FoCBYiLHp",
  "key3": "33TMLF784V5NaLUATeH6NNceJaFG5wXReX4TPHfjFWWcxHtmRxAekNEHAnWJ2qENEqELoifghdWS8AN2VZLrTXYD",
  "key4": "Qj5m6rFM1gAuJvT5yKMcwKXScHvVshdBtwo5bZtYrtAzBJKXjom9iyQM4us59wNafYxerMtQa2YH8puT6kgX9K3",
  "key5": "479aRxP7yUYAhk5gXs5osA1hYt3oSiLxkP5eHhJA8VgFSVujEgPXXMpBEG4FYG6Se3egDBuaxfkgpkQkkqgzgZiD",
  "key6": "XXKkqtnc3BxYgLxZ4PjpX4n8tn9NnkZrKjf3srVELLeEHQgt2rcAwJjiHEVX149CgQa2nMhvusF2fHzxeoUvUXW",
  "key7": "4GxJtR1LhdpqCBy7zcgsU9WE19tWE33ikjMX7SUgD7wjgaFzpceEAGwkxrZUATsxxtcQJpZ54WBSmhBENrRYNTXy",
  "key8": "5nPJ6RsjrqfLrvt79AEwjw5wPjt81dhEg4FNLkFnEKktfQBCsDMPAv9CSLn3KQzeBig78L9Ea7xxxDceqK2Ctuy8",
  "key9": "4YfSgyM4pkrrEEpswybZWaYW99f8uQ9LDyJJofVMamcR5vh8TBr1swje1wWBspXVbVy9iQ96kD2wGNk7FPqATSnj",
  "key10": "5bi4XZzxg8dNcCi11SFy8gmaHtLx9KVbNiULSEvD3rptQyV3VBui9P57BZoxp2oa9Pj8yp2EVscWjEzBHwKuoPJX",
  "key11": "yewD64Gqax1XL4A7wGArFVgACST9cpjiP7wJVw7SYj4oVbP2GeCpcM9xgZ5gpvbWMZZww2DC2mQHpzjCnPDT343",
  "key12": "4Jv4pbHHRrnZicKirJ3pHTSa2wwKFTMYSTWFsvNRenVKq15vRcu5iPb5eAyBva3wgt6uB38nBM6Jmqe8gAQCwcKy",
  "key13": "25csowkysongkE3a6FwTJQ6vRoFRfbpgvdbUtfpDcwTVVAtGn3YC87fba6u6WNW9q5h3ZVjnJvsz6H9KDkzyLvJv",
  "key14": "5vbgtSY8HRBTsuRZaB6sMMoC7mxwba9LYbn8yfHKWUVPiWD1pu57VFiPTxpuZHNZ993GsJPAMRgQ3GqbxQDyh9QH",
  "key15": "67QFnKDVvhGqJcsdsmatHRd1rfNj75EDZoRx85kTVEiu76XXniaKuQZkB7gi4L7ct2CUaW8jnDJK8ePQ7EQTkPZZ",
  "key16": "4d3pBSyafsuJKNN1wHdURTNMJ1MxjZTQNP9vhp9nf741iKfgvNFZabzcCJkU1GABPp93m57gMqdZAxYJVDm9ZcNB",
  "key17": "5QCV7cFro1KHmhEwRTgqgvpJFoTfy7ethBMDt472daA4Kh73zWUV6QSBqA4CQo31c4T7APvijryxhP1FnePgueyE",
  "key18": "5JBc2RircRrYZqzZ4b1w5eV96L6NNf8Ltu1Hy5AZms8315oUNka8NieCP8vbFNDxMAtBiPTtdaFhkKVR7kpnrZLE",
  "key19": "2cMn6v5LWFT4YiZRT9r5gx4NZYS1cceNasTeKKf5HExnvNE6zJnLZXGtHRCSheCt9GgSBfgtPt64VaDEy39SjuWp",
  "key20": "5G81CgnMxaD2mKUT2ZDVy9jseJFb2beUWqiooUSgYqseLqUsc4Jpyfqhv8n2LR4taXYy1qWCRg6Pd9tUBF5pFoAE",
  "key21": "2mH9sJiXuGw5812jDsYBLqw3AZmqNgjyuukVfPxKUBNAmhHFJJyG6zqLqWjya9yJNgzs6T9LpTMjKbVd2TWvCYew",
  "key22": "uLsYeQAQLoTcXwwqiRbwQEZufv5ZmVcV7L3sVzv4E6527NrBi2xp2aCW748CPkAWQNcH3yjWccJFZRcwxz8xa2W",
  "key23": "4vXpy6V4yz77Ysqyat55iZbGeaSPxq8FoGh7ez9NJJg3a6sN6tYnvboTexAsLD9PcHjeB1jPkjcV9scaQf3vqDzH",
  "key24": "f2x6c5pfxXediNKQ3HzAiEyEBxrDGoE88dos2zpVaJ6AcQdo9M8ELDiyDjifRsqNwJMmwfEpCapYA9gzPBJfgRL",
  "key25": "3MYpaYa5H8WSwqQvBXBq4YiWkwPHAHdKRoJiz92NR94NBSpkWgpUwagfjz8rqn7GuRbFZLn5eCmMjABRZozeDw5f",
  "key26": "33k65sT45mqcFGrRwPog6CgtEHBr8ga2tEed3xCXLyam5Sr6h9vNQCnQP88v3X6cvsiBo3t9JXdJgzo4eEhS4jut",
  "key27": "3Wv5A1SErrXpgfHSYvAxXKGe9gbNdJPqVvwJV36GnjF2cb2stBYLTKJ3xsHq4GsZsYXjeNLUcaYYxMQTKDv6sby8",
  "key28": "7aoXJ9qaqSqU8wNycJzXW4QfMJKxgeCugSe1vVXhmgCfXRNczdM76JfxMCJHMk5pJqtx8L7DGVyhNaTDdbA1PFq",
  "key29": "4xtq5BLuKb1RK6khRWXTDT7Kde9N5c8B9ikeaAQETspJssmXmFxU4zejEccALCHdzMNfherMSZL1guDsnoenxbGS",
  "key30": "4jrTK8UktCv3RDR9cEPCC1wtTToU3WSk9oveaeqJ8Ds7WN2aVePX3mP3HJCLgzGuVypUPxhHQmoM43EFpCfBNbCG",
  "key31": "dMbXhDwcMcyxxFSL7RmaZXpEH114uEKZ5Ng4Vz7sw2SefKXK28N8HgxKJxKneYJfoFWMpikaQdgT7mBVC4a13Am",
  "key32": "33xMJ2wfGEctodGXJWiFXTFU7XXyzxGsc16iTYj9uxd19ftC1RiPsjaeKp1cs1b7nhfvJhWugGa8zHrVgNEVMs8y",
  "key33": "uw119pidgee9RjPP7upjNYFTPKCsn6PSoYbtw2b8BfimhDYfxB6Qcj62SgMRoiU15ciHDzBR9UHqw4VUupneYVS",
  "key34": "37we5tR7aX6bAYGn1wAPHFnpvofji6KhbLiaLVNui3N7WJLdDQeoMLPRjqr9U4vf5WKDP3HMeWcYQe8S6LPkgK1K",
  "key35": "4arxfAMEqwMVQMR8TfVwbmng7SPNCuFWv6oysJAkaiUJQ7289x94ub6KfZ3LagsRrNE4xkkaUE9ozR8hoTgkfWFN",
  "key36": "265sSJVY8nQtHFBDrFSaxKPuGwjiPxpEokMU1ekjW1VS98PMGfj9feCPmpDzpBHyfnFkuwGBPnXvP9Ka9a3ownzr",
  "key37": "47GZR8xvycbLLs89FJ5CKY4kddzpUtmf3ne5xysEGwXSyazJBfmKCfy7iZ9DabsEpMmXfTnN9eNQCRiJoGdX2GGw",
  "key38": "5gQz7fDE91WHWStRA3eGpS24NJECfMRWfAwx4s9R5k3rFKVaRfAZ6v1DGqvMMkD7ZwZtscJdsywNrDKCBpfmn3eu",
  "key39": "64wQkvWTaTrjpth7LBxZwv83FNATmaTLNhtzffN4P4ZyA1c5A4tEBQW9YRMFom2iLdZ2DTJzpfX6iY9Mdr5GPAuW",
  "key40": "2SHCoV5XQSrLPMm7PT8KkcYCnUBhcEoCTZjkfNQt1RWzSV6zmLPHEX4fM9zYFYwEumFjuCfQeesRkgwpybx7NVb",
  "key41": "2GvaC9ir6Zmv8VbfxNis9oGfZV7TksnMnNLs4cRDyBQKCYqAG511H8zxXQR8SWdAXkxGHsT2tqg4R5VMS4Bcx7px",
  "key42": "vfGfcRRBgga1WaDVciVVXUmuUcQf5MGKVAznZxxzqPaCSg3VYKRdR4GpHrC2RQpD6ToCTHxhFB9uoeMFargvByX",
  "key43": "X7DYbdmmxQ2ZXCrBxf91SYA2VREF8DFWbwi8PKehWqfkbcPka8YmVK4QC9ohexMKhRZv3fGRgvWF79rPp7VooYs",
  "key44": "4c8vRDcJN2V9rod8YFLdgAuhCsyWeASwpVbBVhXzDKkSreHZB2STHy2BQW7fqT37L9dh2PYT2po7SkMxmjF6t6hg",
  "key45": "3NfF6KNoqKxJkVwJ3jCJevN8Vr5qtM9rgtkaPeH28a6rmaQUnCMBEeJjF1S5j8z59RFVMj9MixHeh8CN78Pw7HgJ",
  "key46": "56ZvEVyUVwDjD3yY6KwVfgxCDY7dC1Tn1QnpsX7zFVTR5BFmD7S6rFRuVjETFw3rxu5xjaFrSrcy7tJrNnVmJ6Lp",
  "key47": "54oBbzARAyv3dsW69993jPw6xhNFzx92DBcRJ3AvEMh3kPhcSVxNrHcJenkQtgCfEaiPgAdXLCPcDLJtBLMjh7qa"
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
