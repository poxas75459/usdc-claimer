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
    "5iVAmqCeDVATkuaGAaxu4nBamW5uTjT2UBhcN9pVRBHLQCdKgVZTn66ZMZurRohhj9qd4VVJYtTN34gDiPms4ioV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EB79CzD6Cy5zdZxeeEtxDdfLmmjhxkJVaiYepQW1qfSvUe2iGjb16PsZgpvxYQSy2FeEZTBs4MKaz7JZYGunehR",
  "key1": "4MCzjL64DMPoAaNGeAWKjSHks1DhvGdSVY5zovqzd9t63kekJ5b8uYE2F6KgCQAfuWiMUC8hnRbarV97xg6dW8zt",
  "key2": "4fvqNMJr2Haif3nYeXo85Br99hbyZXrBxuSJBywfyFJoc3fTqNXdJTXgoaSxfF79nHPjpM2euzPC9e6unncjpd9S",
  "key3": "5rxVVKQfgLpmYEes3bo8iHZUew8evXBitFtr5SXDzt62Uk1NzcuxEST4fzgkaZLVtnTHbfVXEE6wqRh7AjMWUv8s",
  "key4": "NHz1v8oNZYzfnpLZTEkNGRCEkAJYFC6fw4944pS7LpM89KJMbQ6vfV81nxu8TdUZe5krXt3Upa7DJnShfdFc2QL",
  "key5": "4EvVWsHcd4QoG3jwex47d5ktagp9QdEfEbgFNFQh4R8TMQn6cBqG6nmZLGsJWAGr32wymqyykxF1og3n9F6uc75B",
  "key6": "3XqJcdRfXFrGbqbWVhSSkMBWyEL9JkSeMN8qmLmMSr7GBLLBoHn1LWgWezHt2YkCLST4YGFbvghNWdHDmvbJePHH",
  "key7": "Hjbiz3nLEaumBzEMDmf3B8ZrzyBZ5UmL1SZd3kdsRPU8QWSboqyL5VWexvfYE9wzBSW1mwrMjuF581E9o5HhZr4",
  "key8": "5u7kCZEiNEdANuPXgipPNwSnPwcCYtVSqz58BCdbV6tQo7GQFDR6ipBQ7TcPEVvGB57zAUpqsEsTEYjYSKih2PAo",
  "key9": "4oSw2LaRkzmN3hXmSK2A76hsVYUCfLdSAYDCTpucEvcHChHLpeXavH61mPYArUAB7g7mP182BdTDfe73mGxCJKQe",
  "key10": "3VrbQHGGkFHawukT335Kbp3YEZ7zxtXwqSWj8NksZTzZdCdDR3C4o2oaA3qHvrFjyaB7Hjnc9ee4HGeoxUJWiB72",
  "key11": "5W7rSKGWhqZ6MrMTb96NUPWfwTBZkLmLwgKQkxKqiWxG7q7MyZZgmz68yZeVB8ngozHGhVnS5wcbbhzPAhK7Vb12",
  "key12": "HxbNKt1THVqghbcVnDBWYFduwejuZEDbWZEVzhqJw5vCQPeRJgMp9mr3rB634Sq5PHSo2n8yzPnS1cn6yPBP1dK",
  "key13": "5xVyqhV2xGcQQqX7bDMtjYqsAxMmXk4Vo9Dk3iHDixW5BEYMAxLAoAqB1ptunPXcjrkem6oci1P48jz1hueoqGJi",
  "key14": "Azf8qj7rkJV97GYXjixYtW1VDWFh42UtZ2VbiJX1n5cPjtyXGfNngbwHyCuEsRe3WqzHW43ZRh1WTY9GZYBJ7cQ",
  "key15": "XR6WPUftcRjnf9kHFJ2FhtKVPDPMy92DdcdJqegYSXfpL37NS79TMccBxevmDNZ55bd3Ev4hx9Ey5iQkAPmJdSk",
  "key16": "4kc9w8N6EEKRdrNCCDDrynUfY8EU88CSSef1uoQ9HSjPj5VGdKaZLjsGUP78TqLYphR5TjNmgDxVF9jfNqEquqGe",
  "key17": "4cEg1zRUy77kAAANUVBmcorRvv6L4NcKy9rpeWbYYAoD9X1oPovqJzPr2cjBYqfNwq1gWyN4EG5DsNFLj1xKLfz4",
  "key18": "3twjRXa73C2hJ4QNgcSZHecvUJUEVN899N4Fmrf6BLuwZkJLJMCRc1LwrwrzvaiyNLtAK2MPsNXR9c1VwFNsvuQT",
  "key19": "3Z61gDmbrk192QdqeXbvaSCkHLaFF5NWTXr4mEAqUqLTxzA8SGgobdkVLK1WXJ1ygvo5dR7ukV2k6mpVpq7A4zZA",
  "key20": "2bpMtu3G7CT3xaX3D7EVeQ7DoocqT4ZaqAuC8u81FUe5k2HLuWX9Me33PZVL8C9dh3aKBSqBzVihwg4jUJiJEhRf",
  "key21": "q8n9btWG7sgscUr98XD2kZz5usZWdiAefe6rQy3L1SNejqgqrjwTm6aju33Fx495heHRewgEYBqo2EhifbJmW76",
  "key22": "36jjanTb1KLBTUFL6v33sN39LcQNazyxpPQDhosycpQqNedWcrMr8oZR3gdt9eLQ9ZyWKRWaK1X3EVqYBsgU7aBm",
  "key23": "2EsBxp9StLCAvf2HWSeS5SWPevNfjxMjqGhEtB5Y5Fkci7Pa6zARUprNBbVjbTuNxn27yQgiF3upCPCVS5GwspJr",
  "key24": "2CJDqtSBjgrfkoEvd1Qyi2zjoPdJGkD8BTokmqHniCyy3qjto3HCJYvVa19y71SsG98jk6EsDNe6CH7tMNDyiCp",
  "key25": "WtJsbgM8wVNoUffshfdVqZbtdwLzhQmoE36wnMFxN9uec1j2vTegFs1hukfioEup9e66Q71qYupoWEjWFqveZHu",
  "key26": "4y6PLAWUjpCojXow1r7R5N2znR85bZvU5ofVZdpAzRsoYLeAgMtD7evxhAVbf9de3P3k69uaxfm6vCWAftXXUqRE",
  "key27": "5zS2fayMEF7sBRAjbsSi1iUpc5k1w9gxiaNgVEGWfKPDu8ZBLJZg2rLAHdZy9pV3gNQCcZJPn12JNkV9tsyjS9Ux",
  "key28": "3JLgk7aBUmUStoPFtHE7rYJpy4h9pK9gMhBbaQJzrWqSJk6SsiXsfNapDuLckUP9dP5eDhMsbQZ81awXdmQPzWNY",
  "key29": "fvRjhTxnY2WoLKFvr6DN8kgwXUphzaMqdLYeyRPKYxQ5Mn2rCZY3Pa6VA7CHJPft6SHm8dnA26Rjy7UutpD6Q6g",
  "key30": "4tE1aQpYkAvAfWLBbw9vsJRXeTydGACaXepvMkd7EWsH1iupmyYbt8RhDgrB8i3RUES7mrVVr6cn1aUkqRNPzfmV",
  "key31": "MYPB6xLhTpSe3qixDvMAQukKWNCj9odH6Wi6pAScsP9bwQS4mQ7pbCoSDVPNdzUagQzfiMhjkyWDYP98ManJyF9",
  "key32": "39GSY9votGGzYwe8R95yRLPJh5P8KaVdB6UZWK9j1DmFR4UHGuLbDSdeia8gvNqBUHSQ47m5rb36ytx5hrvvpWG6",
  "key33": "219CeeehLAuKUXmPW7hcHeJQ7utGgYCP4npwSmaz82LhRtWRw5Zmv1e96KVUo86dvbgpqZGoCYgR3JcZnjFg9Bvu",
  "key34": "5R2CQudhP89hrkefih5Sm9cwiLUh3KgGyPJubZvbChtAgv5tEq17aRyXqwfEZ4FApTtNjggryo5ksGZaM6vQNamM",
  "key35": "5Bru9JRt9JGAzE3mVXxDb8C1whn4HryR9sHrXzSnqxR5h8wcWVWxTsEV2eHdgkmJVw2dPTi5HBgxDNYafX465i8N",
  "key36": "5u7yksVWjBzB7BVxeHTkKC5CXrDyXdsjAYgwJEDy7MLSrCeFc2GnxmxDoZhwQo6mNwAnmSvrhBHaSp4JkRvvbKFD",
  "key37": "Tzb4foTSA3egGLVvWMMGEVrjajtBW9HcXSZMMbzx2D6pDTvE2SxGXCdUYrS6VuVMN6nARFVduVPrfXL9ai1XD6S",
  "key38": "4BwaxYRdK17cud13rSQobjwHD1eR6yntdUQNRiW8QWeUVVu8AqFjfqjmgnmnZ7HyzEC94qVTARwL3ukPDsoHWc4i",
  "key39": "26TF4YNVGY7wv5ytKPuTdmbXUy4ygrwoWWyAu3GFhQg37ZXU6rADqCmyvXEYap8hQUnPV3Gmgv3rAVUFK7AnjqRc",
  "key40": "2XP2KoHFTdbMa98viktjWQdqMuJKAyaPgZ24bHGz4xDrZN6nfHcqmuCAPwSPyQ6yL7eNX5gGeSd13tHEdqX2b7o5",
  "key41": "4UyQkvSYPPLKGq87b17muk3z9DTyygKMLcbvLLmB5HkbDMdmzzzcVRWuk8E5KzWSzHpTQc8SBiYa2WG8Wwc6PpKX",
  "key42": "2SypJzi1gEgK11QUFfzBCjXuSa45ECmCPMCUhuZx9p1BzrBgVuMdfBUbG9aNuhvEa5fKK652935CmoxMbbwq4S4b",
  "key43": "5Hn6zytvF13Vh1VsuohKH3HVFbAgzgq6TnaoWnkgRx8ubH3LNa42evqRi88rZS6XMffXCqSWm7UuxYtT1TQGXxd7",
  "key44": "2TtkM4TShb3NLx9pzohN9Xh9XBq49bGkaUu6tBeWriNc25b3FBfUQxhSNCzrnKjkYbRyPTgtTMMa84oMe64zNdLC"
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
