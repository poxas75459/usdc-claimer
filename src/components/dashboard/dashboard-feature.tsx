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
    "8c1aSyWTRxMmxVFwkhSKbVu1jf793o2Ff9RqSwpDsW8MC2JDeSj984CinHgRyCeHZWhm8Ezm1RWYAGJtYCoBZv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EiQWMaWU33QjPkcAkSovDeKSm5bQh2dAfiP8pU6wzyLQ7xa4CJwzJvNVCy6LfL2JjSza1o8s4B13yBwPfvur8Cb",
  "key1": "3srD5rCj1vHgSd7tAEnHbYFf7QPXdVFNQNJeEwxCueETJrLce7udT2J1iVMpWmNU56LH95KagRdiZaDB4pXBx9pA",
  "key2": "j5VioYQsq6Xo4fSke3revHdCpufJgqHAQDRorYHSpfahnMHDXtGXzurhPqAtoAAeLm3LHHtETVnPZzz5bL5MPfT",
  "key3": "2eZJmPTWpZEVJVxB1qta2zoUWSrCVTkN6W1U8Q4Hhdn7x7XK5up6j6Fm2swiTV84DUFFJvJmcrJFn6YSQfUkhJQN",
  "key4": "2TUCsd1QMaS1NfGW28JHi79y2NAP2PtfDqNy6AN5WCCHb2UxgX4yMbHyaEdvv9fHmQuVZSiVHQHnR4PWEAtamiht",
  "key5": "5pB6cJ9V2zDdiWxxUf8UbDC7FDxnMt86PFcL3vb2B2y7ojsNxZmcTX2aPHfCrMRpcuDCkYgpdco4kc72onQtmu4S",
  "key6": "5RwhhYuDYW3ue8Sg6ZnFojivFr9T8LM2x5327VymbYiHeC1BKkHc1jppxrpehmY7qXGugJZnQ2mvbBCG7Yz2RVGH",
  "key7": "5kXpzmhQF8AzQvg579LfEDCvdZxqSdn855MgtP4L9aZyC9rGwyccLZU3W9y6qjrkQpeCk9VJiZpbd1ijEY8dc6yE",
  "key8": "2B4EyJKYuksuVVF9rqsDoXzo4VkkXgPTa8JzZ3tc396dR95DkDvsXiu25xY9QpvKpNesJVSgCXfwYrPAw1TDLFMQ",
  "key9": "UQyktVjWgdtWVN3EeJ7WwJP93Xbi3UyRf6oNRrff2pgWZwRxkp4pKbho7emvvwmUPvESTEHTUToVkoay7qdJpu5",
  "key10": "2LNXr3EJB61GZrRY3wJbzsfrgSruC1AKHAqC2MLbZkfmxoFhUWd4jWAzuUZ9f9R8TY3Y5gnYLjh6VTdQEcY6hcUA",
  "key11": "3itmpoYTzGaRCRHAxw3MDh3VDrBAPjDzBRL4dSxoFjSdpV3hBNkhaQDGiKSNZ8mHX8bZkUnu94aw5uux2d5R2xeq",
  "key12": "4tvzZhYmcDQ82m36C4XsiY58z12QpFcKhwwWEvzppAqeZc8mbPqjv3wxtaDMNYLkCqDCGH8w88hU2toqQscxn8T7",
  "key13": "4DNHkEbANVBQtb7KK2vsH3k9Lh8jYiPDxBvXPvyHTdwBopnknxBVScJvi6MrqQYW7Lx4i2wDQetU6oa2wetyKJPk",
  "key14": "39xDQM8YCLbF37ETH9ASr8QPrx83rHexsaLWtyESXfuMgu4hWHHm5jQfxXbUS8JiZU45URUG1PfPbCKbsN2ZAjCx",
  "key15": "2cbShWWdLLbVNvZYWpmLdokuygXcqs5WVLChDzgRxnHu2RCkaCVNzFydDJxofFY2JXEvQEHztmmhdoP1NigzTsUJ",
  "key16": "49AVMTXqk7UxCyh61zpjHoKEdxHDHGZfCLwMQtqusnb8ih8S9uV6Pj73cErTfnXQGs7LfVDrWmcHTLGiAjdQbKuD",
  "key17": "FQDwHRs1twxAweRf8fZTj3kBLm6DhSR8gGJnzWEhVBKj3hckd2EAja5w1jeeCFcpicmHRXiD3XPb4LJQVn8vrFn",
  "key18": "3JkqLys2qvpe6FR5rcC2sZBTviKzuUqF3ow7hkiAFdfHNt6omEnY35FTxzfWvxeXr8iZqYLoKpQ6Q7VrpKE1KVTA",
  "key19": "52hRbk1dvNb1Biswzh46xFgKzGUimU1JBouMMkKeG5ACRzNcZ54QpgM67DQukFk1zPEMaX5tPn7CkDRiXM81Mbsn",
  "key20": "2JAPvUfCHPmxXtSuExqTjN2q8Na8ZnG5kGTKFvKWhHAuPoWWkxQt3TzWFStpUX2arzXvQTDBfwfDnSuFDrvxWZWR",
  "key21": "4J5afDxmXsrzW77zBUgHFWLxjvtQ6cijjc77Y84cLe51pp4QHtz4Fu6Rszu9QgSSAs56q6LsuzbVkUWGZDJF3Xhs",
  "key22": "55pmpnp3e7b8wdz3kaXQQvysDHd7ssmSq3U4FPx9k3ANLkPjaf9KwJDG7NWR4oWqouPJc8pMbYajQoCBkzYsFEjR",
  "key23": "3b2G4WvyeBpq4tcZMiLnxCcpTFGvWq6StstV9XRejVeq89JV7a2Kou3rSVkXtLDTYK8KetgWWciZpXpmFxHqDjK3",
  "key24": "2TvBtsvrAUosM13vxXuEEdKK3XQVqmn4mqYg7RFX6DnC6vCDh43n4L9vLAfvbDd51MPrP76wdmrQCqAxXfvPfZW4",
  "key25": "3YVu4rbrtf4o1aDq365hW95vDXu8FEGttFR39nchFoXBzVanKzhnEb75x42zZPP56VWa8UvBLpb6f2ozU7mFdmQ9",
  "key26": "62eBTXesBrHua3CjV2hWt3WMFbyUPB7fiP3CpUjkZAYseSr98cwyQaY9ktzHRWuncmGiBNbpFzJRYCZ6e4JLfKUh",
  "key27": "5Jb7yH6hHLDcxKfZic7TvMiavyqFN2U1vSBgu63yEi4WRoU4sypi8aDxVPuoznYjyKmCNQ4Quxvo6ibut7HBFqxj",
  "key28": "3dAkg75mfYdSGddZm3ofqjh7Rpa1V89g9J12AHMUBWKg7nj4bpyAfPMvBBVAVZ4CKh1DiW3KFJgPn3Ykkb6yT4vs",
  "key29": "271CqABBZ5fWT6QiKMEvKSS7a7r9YXUv29eqQszg1eHTxGqbKm6YGighM283GgNRVr4cxV7zESwKGmCqTGb15xqd",
  "key30": "4TK4BwLUP1CX4R4dNHFbKPBDXng6cCKnEf55AA3tgC3LtPULjQJmcbkfpWE3qLdso5ovivZP4xnssLZhhHdJmw1C"
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
