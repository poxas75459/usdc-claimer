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
    "jb45NpvjwN1YEBvQEu1b4YtXQR59PWgwSfHtmxN39ehhVTbYLoFeCGVidBBzgFKf9rYxGndYJdDJHg4bVAA32Tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fhhfmq5tVHQLsBHWHhUG1cgux9ZCziXEUKhFrWfxJ2EZURMLQz9Fjd7HSdTFYqbA6XYsciG7L5SR67zHnZWFM4U",
  "key1": "28GrUVQ9vLpJUrR963r5MnWQZBtA2ZdAz63JjA2uztS1dJWkgfenrPkxGtrky7yxGMVxFXmyNmxP3zb9r5X3LMVs",
  "key2": "3isxrckMWifHLXQLyvUmeiYRqEboJT49FV8RsUsXhj9LXQk5XCbgJmYwMZfNomfGVr5q9WhuZtaHuno5zgf4bqwy",
  "key3": "4QLLKqVnzNGyQ2Fp4o8QPSVQvhEm8SiignmvPHk95Z85WiruSKtd1SNt44jRUJWX3ts1EqXwtLFxuWU7Sz81WdND",
  "key4": "5SrK3vxFyhEaXjPUGChpJrhRos7ND73yjizGH7W88ivQRPKoVghi1PX4umbFDMJGcysiGRb2Bn9EVRXgoApzpn9x",
  "key5": "2Hgai9uxRdmkcSpPLUtP9SrsiC3oG1qUd8FprzQZ69QzHdYdUw8Kbu4aftPsDpfSMfnv78MzDN21fiwJVf4jgWY7",
  "key6": "4xk7FUPMWTLRKM29a5HxVZsSdjVJF4ccr2ckn2cxaybGzR47EQ8muB9XDF8nUcAbovxCQ7PNeEuHZxyVqetdvV44",
  "key7": "iZP42y2RYmSxBUTBHRvqKhecmRDfwWoBrgbFj3i62heC8Hk9QmF1MCC6eCdP7SwUm2rgWvxc8vtK8DxUUjfgRyz",
  "key8": "2BJryyrovkSB1JeEdFAR34otH4SMiXx8rK76bLHwivAm9DBHjXy5L4NmVxvi9pU17qb7RFtpzccgo2Yuk6szJKst",
  "key9": "588QGidJh7A54R5x377bHrc7hLphQCRryQogPVkTNMyPoUDnFTp2bDAYgYbQcEswPCTdmLdbRBjS7NGYb2yc9A4C",
  "key10": "2tDrnDoJcKYHhiNta4UKY3VBNNWpiJ2Nv1Php4V4RTdkQCf1cyxcaPHvD1VnSKFFLL4y1HhxiyHeR2w69nyEwpms",
  "key11": "3Q7evxaSqPhd3354wn7gZhoVXwu5Dx1i5j2vZCYDTnbExarQs5HAs5Fz7rFaZuf9HSm8H1bhCh7yPXQmCe5fhvYN",
  "key12": "5YssqyJFknog8FwRqJb5MjAgvViKUY7oshb7JZuzYYa4gTYUpdtFkN6fCs4B8vT4FnJkZoWfsW2Mc6YrL9pNoMQR",
  "key13": "9p2gfm2tJvKv4sMg32xhWqEWwGyAJ5jhpaKY5TKu1YBzcMrpDBwsLHnbnXb6neM6HiYsyVQ2p5Yct4HuACxYKdf",
  "key14": "5U8mqxcTepMsHv4Y7JceF9qR6FgdEGsVxUap6qqrn5uwd7CFUGQwbuijiN3Hz63zJZdX3PyzEv1mRf9mv5BrVJvZ",
  "key15": "3pTPNcLvdvUMvmmHiNEq5YAQSUAkzVQdLxYdejRGuos3KMpRUVYvkQ7cwjnnwcbTLqfm89HWpN44E4kZX4gfukgP",
  "key16": "4ywmPEEWzkQ2hk2z1hGwG1TfdwM4YLd22p94PcaHYeXnrDh3Fmvy6jNWdicWL6npzviLDDvtbk4fFPbvWMY5EBmb",
  "key17": "4HGZB5qV2AKuiKdeEkKC16QGwFhxnzUDXvBL3wb6f6mdSC9RYwJfZkgo6bY5j9K2g9DDAexZgXQBn9jF6prHqgi7",
  "key18": "2XELnqPTykagZu7Kroi4B8BQ4fVBcjuNEMPqkAKjnrP4sgMHLjgZ84ar6pN8dQyPqAtpDyVr8ACYihZJN7tYQzCX",
  "key19": "4rtncWqaWFNRY86wiAabXZYFa2HrndvpBKCjtET55cufduTG9tzrSKDLBoh6J14gVhBtG1zUkrv3HsfBHkx1fszX",
  "key20": "os7HBP6Bu37BvgaRFJ6vrkx6EsRpu8u3ZVj7p2KyDYzBcFxyxeFeTPNxna7GQLBdxrXbkzvMbp2VfsuXPMHKSE4",
  "key21": "4Tj8gnVkeiPs8fehuafzPJbT2ZxNSieH36KiVKj6TphJFvvsXtUodFA27yLTCPykADPGJjN9AUVjy16bts9tcMYW",
  "key22": "3NQb7SQh6rDeZ2ocxmmhsJ796fSx8ftdDWZA97wJ71cMmrxtseDcqQpo6ecPcqDzY3KHrVViRdvGcifXEEXcry3t",
  "key23": "5NLKfu1Wo4VfKRR4SFMkG3XU2BAEhfKZykqMeWrnY64K643SnPLdrmXZ2Y58ggFhyvsgqyJZgw7zA444Wx8LE9c7",
  "key24": "39QysMDnHfJH6TR7pEV41nVi9t6weWdWpjfvQkrMt2kPw3gSgxKm9s4CMJgpeyNBj1bsozCY1EunVPda1KaQuTp2",
  "key25": "4vDEfs7Ry41Rtw7jgXypcuPXBJnqfZTgydLstR7XtwMGeyqnXWqC4CKzfNLvmUBa9NdA33uSMvVsvCQX4abjyPHn",
  "key26": "5rnsUQsA9BMxkWLdz57SuEXmWoPRHP3rY7ME63c1NPtfipeeXDUB9L2etwLhhE6JfGYogvTBMbcK1zHWN3qMZkV",
  "key27": "3ut1sFAHyG9fSJ7VtFGKwpAstg7gdAXhSBkFJAnVocP9bh7CzEuMaTJFLXHhCq387etWnFbMB9TUrvtz3NtskuNr",
  "key28": "4oH3WuvuRc2d9MMG9Uj7sFrwNJM6q9uvh6RwMp9k6XoHhL1HdKjoFd3NRr5eZBSgaybvjswft64GBKSBo9Z1TjKV",
  "key29": "5Mq5xRzcrWSdJXFEqu2x55QFPCN9m4vVBJ1umTZJpU5FuJfrp9F85J81EEnWNtn2JnFGTgDUTUReATd29c7PZgPq",
  "key30": "58Me8wZkpLTMUwB1rZiVmLuKTb9cLEGNm9cU9BbyLzEgAY2eQDwWQyaWyH8z6W1cEiCfdLrYXiitKZijBqa1fnKG",
  "key31": "42dm9XabB5Zmsy6cnGnyHrFkhtHekBRk58nvjFxCHetboiVAnVHFrABiTJ1ZeYdVzKJCf7MC7UWimb4PM6Uekav7",
  "key32": "3WQot8mmyaDBKKLbpS4JeASDWaQBy3Httnep38QG2njqZAthd6FSk5MMQDtrxnc1DFzFrGfCWwHwgAS3dH1oEd6J",
  "key33": "uaP9RGZW9kn8ZLeXJULykZGDt3PNFdjm58khooLbiT6vabraqizLsoKzVV6AgcArP6hXF7LbabhKz3G4BzUKiGT",
  "key34": "5NLQYPKBapNw8oP6tnxnznJT9JyvgZ9oVDr4KMyAtKW9XPPHv6r1k6aefxR3eVHRZKo6keSHMhuJym6iJ8QpwZ7a",
  "key35": "2n5RNsDwDWzeJBPdcnQo3gCRcc8qyAxy2ohAQ3JyAT588yiomKjNbAsXKYqdQ7htT9cRXuBBmUyvGVHNnoNN8Lpg",
  "key36": "dWYuQCb44ZYjokUmHDD31SScmzhzG4n49jf8YeqYdvuWjtf9wemNDxETXaCcRV5z1umL9xuG5CzDmR6ADSzigvm",
  "key37": "4weD1xFBzzYwjBe6FJz4TTeLnkAkv41cpc9z57VZBpNtgQ3Ws34eRkB3MgP93FEJBVceSyWvoMij3C3QT6oxgsnn",
  "key38": "4GPeQqtgwzLmRq8KqfuD9UBc1mo5WNSAutUmM9Aokz8fb8mDpnVbdA3h1o7ZUP9MCVLnsAph2EGSidTNdu11HtRK",
  "key39": "3tvva9mc8Xxi6SbcX6qgdzFPVU7BMAeDSmYb3nHDyosGkZnCjvYA61fkact6dBtzfdsTNEd4urtTE4mRZpi366Mg",
  "key40": "2R5a13pWqTJQsXWjBqr7pM3DgFjW9sVis4A4nF2Z5Vuy5dcyx38xtxVxhMuAGnht8MbkxdMPYgCPdci5CoRybRBu",
  "key41": "FaDBM8VwKWWy6wkJR2kQXk5rGwPGs86UApZMrBdSNXQdyw7bDpymyXiARyf4jfaKVBGTuGLCQzAcgYCGhYYBjfp",
  "key42": "5d9Q2foubdYTF7Qc73gLFccqW5boJp8W3iRm9KjysZv6j25z1shRCgpnEx8T1w2tK72gAHX3SJhotg73WuszB3Lb",
  "key43": "3iXc2KTD3HY2riB8uWWktHMsGwJqHu9hMj6hjKBDyrEuWT5zdiXtMhEx3KStg9rCd78bRKnJzHceQ7ALq5jc9jbB",
  "key44": "3xmCzrg1sWyTBa3wLwVWppNJ12yFWFc67yKZuRXEQeB2ZLoQ164oVGvZbTEnEjnAYJ6CCg79SCUkKJCkpNwbtPT9",
  "key45": "4okPmk6UtrumQvLKTXGsNSSAvmUnxDZYGJ27mzDMfVj16DVrkwEunb6Ht4WPmC9LahWT7B1BRZvFcfb38bxuMK2x",
  "key46": "3oxBjoBNYX4x4sykgkMDNuZeeKXHW4V59KiuWQLcMJUAKz9NwV1CDLhjoVJKFCp1E7E1twPmMwfMYGG7thGgy8nS",
  "key47": "27A7WCfbhJCKTCNJZ9rNdPRS623Dq4JrHZVhCGooPiAnboWAoEUmTTtapGptnZjr4dPLGdgUKpiWdgnGbXWiqfDt"
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
