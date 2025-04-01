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
    "tVMU6zUnhvh5LaRdiWwUDwH8e8232MP8HWsD4323BqL2skj56Z7aGv9ALZ5SRdWTa9XPnysiGPpc3BisEoYdpEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HGU7JkyHsEtHXe4awayncsF6SNLF1z5kBEQwQZj7Lt8eZ6Vj4d8o5oskh4ANzP3Se9i3ZWcSHD3fK4HM7SJnFjN",
  "key1": "sgYc8WwPPxDvARwcQ1pgVMBAKZ89vHaBRLeAqyFqHNHnT5nfsDdrKMvY6U4P2EzL1HHmUj2qif5H2EvqZzBUnL4",
  "key2": "3HfCGntzChTu1iioejJ2sty4Hmmy4nrwoKaVPTH8Bmd7emYQoHuSbDRzQFKXmAxmdH4JiNFSFABws7waDLWPD7AG",
  "key3": "4jxy5akTicY1q9o5zMT5BXADV3UxHawwXWbNCRMu8cbTAhcErKFthc6PYpEYiW8Wsj2VF35J7qHd6HTFRxXPS3Tn",
  "key4": "4dZALNgH9ry4T6xRYb2td8wtTgbowaRnoHtPbJu7EMgrUZhR3VAmq4W1gv9WWQig7vfyivdzBKqp9F8Hqy6R6DtL",
  "key5": "3XDNs4pAW4iHsfXxLkHSiR8cLwEBcin7ZBzbZUbgcSeC7cMEpZeKQPLq9RWL7tMkHtNhX5pfdfjsmoDVaocbrMnu",
  "key6": "3k14suGzoBJSXs1UrDawiRMKCx9iA6n19SqurSAQneFzCryUJMRtcxYdVxu6zRqrwgXcEM6rp3CDPiWNi1RSoZc7",
  "key7": "63QVYwBKZmrDiin9k2XuVDjhgkeEDhcsgGXTJhqLdFNx8T9qqFUvBxYanuzfeahpc58zq16KFtgnwXTGwZENa9Fr",
  "key8": "5ksKnpMrC8UH3xBpGrqQtqFi5x4VVgYuiHousN1pM8CziZvRKHrkgQihuEz6ot2t2FbiX7gEMA8NKrRPB91c9uF9",
  "key9": "2rtPHMdHsbknw8LtcNhJqH9QvDHcQ2MkrTavtzNsZTGG5Do6Jd8D4Y8LfzdNYYVEj6V3Mrfb6fqK1Y9jXjSMSinj",
  "key10": "5PoYfRNQBMsoHeZr2op4GqrQmCty2wQCJ79Yw92MNcjvbzuxSKzFYyAXh95Cw6HbYBzXyo44wmk8wWQLtb9657SC",
  "key11": "S2dVd1WsnubdJYBVUDW7EGrijTW6pYy477qctrrcusEPchJ1Hu5CDXNEJrE3zJEVGRRwFAJ3mdV5qqneG2J2bWn",
  "key12": "2GCPd79CoZURgmBHoDcZ4ZmuYgqKNnSsEXKBpxCkFCbdxvTyCgDkqqYGXvEheuXEpPfpfMzdjT4gmMfaBKct8urL",
  "key13": "5dTnbjusUcF7RwtEfD7sBe8HnntMoDPD1LHcp7A1iExuaVoYFJCN5NqweTfjV9dknaUi9f5ydtqAFveVMuaqUWoE",
  "key14": "2QYSazx2PfMv7fgR6GJyLWi1khwjtHDT3J5oxvJNmX359yoch3qGSP63aSp3EahzXExa7J9bCNuf1JecrrBpZmaw",
  "key15": "2CKdqktRB5v9fwk5Ky9kQu5bBfkXy35ZKVxRL1UJYsgit3Wg7HEvm6yxhhqMKfk8CPFiMDYJqwtPvNXxGHMP4jAt",
  "key16": "3o83nF6BNy8j119sekbzJBZP89y9raXXLYzKiDHZFebMUYXHpxfKxz1gw7szTiEjLwxmCbg2hgiC8M1N68VTAnPd",
  "key17": "5qy2fj5Htvj2JTGnN8feYNYdtVhKSnKbveeHSvEqyXDHTTRbV7aTsBZPh6HhzzAo9AbgCGJMEttUP8oPCP7C1jFf",
  "key18": "25ccKcP5dy3fihwjxLMC3aeqxCYFgmPBPw4shASaZAM2tTLNiKKEk4kZUM1AFXLq2CsC6eYcxtpPpCZDWQytiZHU",
  "key19": "675YrNNwJMvQNe77y84c7FMGHicUQdQkqgdVJ9e1ehdS5u4TJz4HMAqax22rY9AAAcfAxcJRUa7op6sA1T4gUhxE",
  "key20": "2uEaLcWTDyh6nfcVVo3gV28Ga44L3nX7ZCQHEky7pk1x873KS7rDP2EJbNTb7vhcjPTpLT8JAXUwebw6g81rLddW",
  "key21": "2ZaoXM8dRM9TUa65i44R59Uu8oKKkPsYoAwYkET1Db8H51FNHpm5EQDSMdkCw3oLnAUPoNKbgoWR3g9DoRZwiZEe",
  "key22": "2nChYFBPkanfKSF6yJsCqJCDQEh4ercyg37Jy1oKDfd6EpfcU92gizms2qxvJct67v3pL1x3J5xWJYkpTuNcUhT9",
  "key23": "yrQXakgbtaRXdBztdR8PpQffeRSpCy8tPLeSgWuNsSnoQAwRdFWWDpLHkkREZpncsfGTb6EK5Q1hYiLzSgf4x7s",
  "key24": "5LmKdt2bDh7b4ounP5rMujJb4oikTKJ1pgoNiPw75sUKbpWryP2zxnudR2QhyR9junSwxm21btK8WCGDqJKjT6no",
  "key25": "gt2yftqqPjtNPUmb6trjfWTeGVp3bX6ihRGimrzLS61MFwDqS8ZQxZJJTpRuDRb18W4hHsgwMuun3KjzPWADfay",
  "key26": "cniTjTNeX9SqFEacyjDEnGKX3Cvoov4h7nZfHA5qGJibwB9LULU9veqAdmoj7cHKp8EVvDkqW3VckF9raxfPXhE",
  "key27": "3PMMG2WNhZksQ3yC5yq4duGmMRv3ke4xdrm2WF1aFKLS9YFP4kq2kj7nqWeRpYW9vXqRNWvu9ewyTjRzgdUgFAXm",
  "key28": "33zqevhuk69GZ9mDE1jAZZvuSAuLnfJqtLx4rsTF2c1BaURwgcHVwweQFVFhymubHU59PXYrjK7sBpLMrtnGwt23",
  "key29": "5dNcusD7jDxH9fq3Z5jjQjCFiHit54RjyH95XTguJRxyiB6Ja1ZkJHnvgn5NEjMLYNSjM51ZuGn4fJdCQ2Cy9u8F",
  "key30": "4p4eE92mbGyDQ6sa4HvcpgLFE8kDWUgTYk2W3VwnvLT2FYVbFRkvL35DspE1DRvNc4ySqSVSmfdmEChrkH5dcbwR",
  "key31": "28dV4VRwDw7LuhvqHubdrUXmGWKswGWbU8Rfj52YA3VnzB53SbM8zoZvm7UnDMbY3BbpX7TznZjBG1sBXXZ4J2Mx",
  "key32": "3LnctZh5CkE3iaBgZfuTNBfSEFFmYayHL89vnkKsGyjwN9F5254uTfTfQaWUUUDX24TiNK4ZzJxdGjkqNCCZVXtT",
  "key33": "wPVrnzboXL4ruRkeqcJ63sERcd7kfXQ85uUGd78bNcBj1mVuZc3Bv4rUvMfFdJ9MbEjbA83jbNyZh8fYQj21LbN",
  "key34": "67bHpBhavkBXmMq8XyUP6uLi5hFi6wtuwH88u2fztP6ZyaeEeuRK6zmjQtWWp8BSKgQ4fcnUPY7PgLnjtxpD9MxR",
  "key35": "3k5Zfxv6aCp5inPLcuE5m2tuQTEP7hR1RHSbfoHNKecerikYwXSPxG12fnkKXrecTjfAfEt5oCGAkSUwPW2RHu5y",
  "key36": "5ApT47eknRd62nBAfF7cs88yeoriVAV36tqBvFShiM9GZW3kQFjDP8GajwNFSuHcfRa9uXBpa5Z8L1Z3bbgvnSRn",
  "key37": "2p52amnp43hss5ZJu5fhPken7GJsw62FHp3HECYDLPNYHHh1KWR77bX33nbpjcsK8H6oHYBfhxpfH5Wuuj2GmLX8",
  "key38": "2E7Z8X21k4LfgCcz71vctVqGGPuHLftVVjqSg2n76nAZ9itgJty8wa8E7wfXnQWyYJN3jJdVyz8D2rk37QzmWiB2",
  "key39": "3WudvK5qDaYeqSHqU7JGYQ4UFTG4uLy9WS3SnY9P1wLotiupSUihkM5X15tCjDY3a2QYDBFGV38Zh8FDtb74apAP",
  "key40": "3kwWn1W7u1L7tPatiN1knDnn4khLKqQZUfpHc4A2bPLTgn1SLYc4Gc4rtEY8oBKbMjGWBR5kAyLbSvNNoiKENvy1",
  "key41": "32TqtD7uaMEEmtJVRJufk5igWwkrrnapBUXa4hup8ovJc14ipsXBecoda6soU3zvXXbLudVJmB57JswNo7iUTrLG"
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
