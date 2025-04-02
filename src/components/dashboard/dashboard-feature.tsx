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
    "2edaEBsjvHkhMXukanWQc2Sd7eULLe4yguhPRybkYBzJTPV9zSYBezQnYJ9wdcR9yiXXrZDAM82Je2GxmMoASmdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "96UV2wpLDTJr93JQfjLDpMeCDAYWNPFMi6RFVuUW4UdwMXKTtckdiB5U8kpVKEhUg9YAgMLr4nvavB28XuAYst6",
  "key1": "3MEUCJgrCNQSBfVEaLtjxUjUQcRqAUuZc5TR42aUcKNvRQQ3B3iKvx8cySrgpetpGy42djav9KtENKnp782Zo9FB",
  "key2": "5szXxuP32Q3S1D45y8pPsBLTikKsfT3e6fFd7pVLswSqziy7mo4uWC526qKUyfhEwS84UH2MqoZzFj8tpVen4ZTR",
  "key3": "5NTEVU3GXDWpAtrAyHLepkf39xYhpkT4mW88J95iizcQGNrQUvhc2ZoyYWWZoWwaWhcHYByRxJp2LJLZN44FTX9C",
  "key4": "2QPSBiCuKW1akB2t8rYEPEc5CCRK1akyr6ZbfEFam3NWB2bfyvrDTix7FZQfHMu5uCsvpvojkxVCF7rR7LNVrfhq",
  "key5": "2ZqjEsVNMw4ZnvHYcjnPyafAnKxdd6UXwkkfRN4PBvdgFwZse7ySW14trV9J6jRqsSc5LdnFcMTahH4z7tyVRoFB",
  "key6": "678fofi219DVyc4nTSAjSff9aqZuVDUe1D8ZiVQepWdzCSAjuaBiCPqF2GMRDWhyeC1LZGytQ6ZimEbu1SXNc4PL",
  "key7": "5UnbkUdboV9UFdtjSFfXJezx3ihTW5CAYJ9G12Fgpt8zbADAMyNa5ieqSZ17d8A6Msb8zgAkJYxJ5g8QHTytSWoH",
  "key8": "2WXxps8i4gCroAZZSKdVreXgHzNZ6Xx3XdAf861ErCkGnfsmps5YGFmEac3Ry62gxNgxXNQRbMwuPZWJuQ6Syd6r",
  "key9": "4ZVxYCF6Rxqhouij6bZDmWu25HgevcmE61kKvWAGXHmQ6JQwEp3vu3ZUANMoBMmpbsrXACS53Nxc3iwUF7AqWaaw",
  "key10": "3H3FAyEn1p8uVfFT4FkPK52EpyGyn7CohCbySTZ6QoC9usVpztduA41rjttZUeB31PCH5pLivv3A4ebgZZ3tJwwi",
  "key11": "3D8GC481aPMFtEy9NwbHbwW9AswAw6SvjPkJwZERpQaGySoW8uaMMGz5f6qt5Usw12Bh7MLJCza8ksCE2gohfVGw",
  "key12": "4tJniZbUL9YRwiDWk9RenxwGXHhWdfSaEJHUcHrfKKoynix28ozEz4t9hxe8451dAP5vbhSCs2J6YXc88NxZTQpY",
  "key13": "2HzuBYNsgynGDqUUgAcnDC7V3dN2YxtPC25ps6n5onKWNheC6eK5Lf5Q7uQ3UPUWCwHWVaWKk24FNrUCATs4hLWn",
  "key14": "2vSpUWWqh1wWn3FgqH7aCXrMGFftE7GMSa8Kkb2hbu959fd4vozuBKrK3aDDTpPMK4vD9GyZtJCWxjnzpqdPQXPG",
  "key15": "2QD1gxve9A8cAxJGGiekK6sNatNzpV2sX1TyvjQNrYR917LWhebZcBpD8U1Kdd4hZFFyyAPxfk7VwBeMiByt2ubW",
  "key16": "brXfWhCKvaDEe3eegu8Hy2Q3giNzWSDR835ogFkhxzyr7zwaZURUQFt2E8SgVfLJxAupALK9exe2hpFwWibx7yy",
  "key17": "v14hvZ7PaKourEe8mN8WbW75M8vvNTg7z1Jpt1kpmHU6cNYQqoa9znFitGt2eird7AvM4RGhrCbFt1BgNR5foUw",
  "key18": "2r1Bg6VEeUBrzG9Sep55wU7XWQC8qCjyTaBLmnqdFzhrj2efD5CG5Pepm6ih63UXd62b9umJ7yeThCdBkFkQRy7M",
  "key19": "dckNMjAVJmShjDfTkFNb7h6V6PCkAz42fMZ7PnXPQXpMVeQT9Z1VxnNgBXU4iB3MzWPjAYVjMkuvfcNNac3ntVQ",
  "key20": "3bLdpdrqD6boJeJ5iZLaWvV5baaJb9e6d3pDgyFePUZH7A2RVUmz6G7BApmYsqNeQ6t3kZW1X9ZZqj4Lzd51VAUh",
  "key21": "4d6VK34wnh2sg9zNQ5bsbz3Cjjknq99xUYdJPR1QV1tmSoyhaPCtsmFSnWnxWUWpLKbL1RZG4Vbwwy8CVRHq3xNH",
  "key22": "3penXiKuitSg7bw3FapieqUdVdWGCyo7GjsTfdkV1TVmbvFKNJEJZxBaP1jE1x1znBqR5onSD1cv3BqDDutywzvn",
  "key23": "4MZ3YhRkUt5paY8i9CF4uAXPQwfbByGzmfR8GskNJB6UW9CvGzkkkdkzmH6MEdiZbG4Ey9eFKSR41dkuU1coQV8i",
  "key24": "3Bcm9SS21BCuE1zTaFWrYhQ6SFitdUXoJ9f45fiwexCEWFt9wH57a5bb91vs79TqRW77irKjHHjAwju4K6mjt5ee",
  "key25": "2k9eqciVcZmjRvAvGirfgw92tahNBfvGbsGDdZq4gcydLFCNTg4z64wdqcuwEi5rp6tjUUkPDRvb6ztJZxaewr4K",
  "key26": "5mmEk1n1FLxh6F5sMHf1sBJSSNgRbRNqpT3L6ykrRcHXibEuFApsKeYrW8Dri8qrZezxTe7dWjiswqzzuvGrXnRV",
  "key27": "2ac4TZNQefNtJeraJU5sF9neRGyvJPkFgbomiawaxZR984RRXidtPyAvBYanxo5DgAV474hR9eQBt1AZuzTGgtbP"
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
