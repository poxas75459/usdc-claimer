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
    "3JTTrefuyTuS4tSV3T7WaYt5gREbgCFKadPnGMoGuar55WFDKiQsQwHykk21FKWeBnuAuwQ7Ryz9d69znevCy5gX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nL4nmWmwo1fdpr9uvdMFTiEAhnwLSRzEeNgoae4MZHedfT77So5XTZoCcGx8uWhFHTi6so6T2Sg7rnFnKagYzPk",
  "key1": "3Kw2vnMzkG5CXjj57VT9vGGrCkMxhb8mF51X1DVQhEb6A97rfHFpXU7C9ApThhvfi73Zy2yW8kC5URsyazYZgCiz",
  "key2": "5GXd2t48Gyu6eC7KR8yre2wwdRob59TpgK6VyfiBiyMvQYhV1MfxfJG5TvEz8E78xLYRWf4igYZJRPuaLyzghmhQ",
  "key3": "wFDcdCzeSMmzTzE6Ly7EFM833cBNHtzGzVJvKK5VRXdbzKYGaUepWDm73M9Nbu55oMa5efsMMoJrGeCCzGGQKfu",
  "key4": "4hH4oVTyg8N2sQcVpvVP2uZoAEbzr7PWh9meTmks2GrEzp4zstP4G9KdZMXSRuYqy5zuwLLgNrHBRxZ6ThbJmX2o",
  "key5": "3rC2NainMtyt8i4f4UtrohRUH2rg4UszQCkRg9CrjKc9q1u1xApvLaMAj1BhSEGJpfbdadukxs3Xv19yPqA4wuG9",
  "key6": "54LCpjXA1Qt1tcbeqPr2q7oewCbh2gbqSxtHPzmejeT8BXPqqvWwtA7WkNmbRhM7rRPY3K3wFRCSekpwpSjxGzNA",
  "key7": "NX2yHsRfBCyaPYKb6ce8CHERzmQM17Ex6FwGp2jT3CVWZdBKbXASZdrd9FitDVAPGgZ49VdJKchxtJ7awm4TEvv",
  "key8": "4HLLoBAqYLpMGFNVekyx6AdLMUvqu2CPw6XQdsp611chTGpj328sibCGMg5KZ1hUscEKvzt5Qz8J7aWn7KE1oK8J",
  "key9": "TDVFx8gtK5L8CYR6ryebGfoJ12z9sb2vBLwN8xj25BDrhvD92EG7NH5GByXjSscSqnnHoQBiXdy6Zm5x2qgT6wj",
  "key10": "2Tc2tGRicmsiQC3ivgDTG9JSACrLJhYn1qQnHgVhDRGrQUFWCR4NA3ta9iTWCLhUGumNvVdkGMNJywMZkDRptW1q",
  "key11": "66aHTGcPdKPXkCvcei12XCHaQ2pBkrJD3EnzST1ZkdUT9CTvFK1LMPNMPEo2YnbrjLSFizUsQgc3asuwRZgYYMsz",
  "key12": "4DXoGsTqz7LixxMCr1sMMAn8HYTVRr3dYa7BrpR3p4JUujzoYGQKj7MNcbMuaLvY98tisRvykem7jcSk3D832vWL",
  "key13": "QzBXzNEhHrxF7tyXhA92Xc2eyNPLBAGfW8hihEwZxKEqWFXpoH5hqZMUFuGQacPKv7h8653d5b5XqoRn45Sr51L",
  "key14": "3BFW4MwYn1bsk7ShHHd7rsu2kgmZNujf7CdarH8M4BC2evMfxyZEHXSWmJSFzdj4gYXp25xVTXyd3JezLUktTkCN",
  "key15": "oniC7cPPgxKUyGiYDfxpqxKHTP58sbq754JtG2NrdJuRdFELQMf9Ev26pQeY4zsTmztAw5j3jnxo7ue7ER7QfVY",
  "key16": "2RLpsMYMzvHVgJ276H6bsXSk6qcBrxpvAa4rmDRNQf5ZZSgRgosnDZ8jBXV2PUmK5a2DxZgUwKJYPvwkvw5gzHCm",
  "key17": "2gL7NN9jvCc8fq5x5oixj16oqAateLLMhYZwg1f8rZK33kwAakxobmn7VKbzVbmpd7K5izGShBqDvWpcgBrQto7o",
  "key18": "2d8nqyDmHKTfB8Pmvd21uQuUJTZ9Cyoi5iHdCHJvnfgo6daGFMoSNLG8KXAjRpgf7MJsjG6LeZ3npsSB2Abz4Lg3",
  "key19": "WrWqTK4DbPui9PgNTwYtdmi6ZLZpQHWCzPCzzf8ySiafnrh1pF5i69hPjhY4Hv6wnE1f7C7XHd12U23GKmsDiGG",
  "key20": "5nXGRXTvMNmH41U4CPL2bgGopnjfHw3ZmcBLnZKLq6diCsKbPBtrdqHTSbPHcgxV2QgYoYfrwgNLC45XT3f1ebRD",
  "key21": "qf6UHSCKom6CzMcDas9qvQyCm4MfizxhDnAxpddNXB9x7PFVoZvb9DAPQ2A2H4YuyAYDABWjWBDyjYCBfcPrXUc",
  "key22": "2jfu92WNP9AHHagJ2cUd3JCE73nZeJ2AXpXQs96c3HGUiHw7j57YBJF7X4untweXDt7M8UqiUeZKfq625A7K6VET",
  "key23": "dNGnmg77yxe3aVo6BiiP5HeRHoSyUzosKbQ8myWqWQa5CucZyQHX16J5jzr1eZzXMQoUiRWrr5r9v4jAPiexVFH",
  "key24": "3SxwFQTrgasLGdxXkP19zWMU7Avz1o1q2rW7H9gm2XxboEVoJE3BcfhRanpG7F7ePJ5a8Gcx8KAku2LBCCu1hdHY",
  "key25": "4qgLsMRoWTrqKE6fXcCwhoifjMQKgYmLucPJyngJf3hQ5pitcrJ5ntnAhfUvqoytCcU8g8V7FYtuYuvdt5UBCHXE",
  "key26": "28RjmK5oZjqkMnJz3BnBmC56nW36vYmVxJoRPratXJyQXizgFKMhhqZPChhyeTskDcfTw33TdSriYp41LfXWmByH",
  "key27": "5bJ75JUTPxjzC4qKL7akAhuhuvvPpRSeW5LVSGgoe38sHypD9HWNjm6MBFFay5ifKZGsuyhu6evyErBQNivx791g",
  "key28": "sfgm2xYi3rWwx3ZVzhkTQyKv4ZfpsUCJHzXL79pXEiSzX8FeB4aJLGa2Bfpu6FvzaJfXg6hk2eVWbKDhTa3Qbz5",
  "key29": "59vwqU99k4KvqBUoZ96uQt4eQhrZzfQaqeTUWsUq6nHWXcTdAgH9snaoo1eZi4jNMfrDrGjdbf4dUTNHhg6cWTrM",
  "key30": "3m7KyYHbSjeQqokqkfnaDUy7DLye2EAHp36hEY8JJVoZDUxZkmeKdLF69QwJgjJL93EQYCGPE8yJ3BfiKAgM3cca",
  "key31": "P85TkpJf9P8sd4AwZVs3VVazT8Jz1F8mSL8XchfoGcfrYypspFZC49rE7T7SXHPrr2eJy3uKcmKNZxVGvoJoKWD",
  "key32": "36bbjs3r5dRuwALZESAuw55oq6hhuLHPmdWHEWik2CXGDuWMt4ug1Xt1DkFjKoj4nHAvj2o3z4YuJy9mNzF1DEYe",
  "key33": "2ANqgNgs5bWUQ7GrMjN97Bpp3iiD3wRBpnbs4CqwGJJ2T3xcQUf1WQVrkBb5pgow775Aef5LiStzXpe9icwVmUhB",
  "key34": "57W3JCkn6M8Gcw5XC8Asa4tj5rikv6UQq7xLCsj9giokD9SrdFVnFsGuu9nw6ckeZevPmN6EQSbnGE8mVnYZ59My",
  "key35": "EJajhSGmjdVprnSExFXWKrux1tF8odtzRFryJWo1rGr2EX1uqrBtVRu2L8dQiyLy5h1iFgZMRPcJ5zmFeioMNeo",
  "key36": "PwMr5uh514DrhWJB7nEjbsqgJ4NQbZDZLhQ4HvS3CmX47F4YeDapbPwX4edhMarKKPoBAJzTsLjcdHNqvgUa8QR",
  "key37": "4H5Z6pmGs6J1mAMdCcX6mbwMAgaWo2LoZKRjf43XSrkueryzsmYAZ6YWSEKUukRfJd9G8kNr8LLPDeqrgz6WZMSi",
  "key38": "4obQuRo3zzrvRS2eCvFJ1iP1Tz3UxyrHyiDkHsAdCUiKqGKmef4c8kFAWHpGiarQrgJjeCFi9qM7pMgwi9BG2RbP",
  "key39": "bBqLSyt89szMcDrQLexK66vsCL83gnXnAttcK7iTouEWjwL3RDASJpe1wxcuHjEo5BAp3U3yPBecgYQn7CSqzuk",
  "key40": "2P9c2ACXBB2FG5EBYLzYjMGvqVDgyEYn1mpzGo6NR4wCbxG7vVjinHMpCgAWmGw2mZfZ4Gdq5oYpp2cmkvjys5au",
  "key41": "5aSWfsiWzNoeEnpu8r918cczPm2qYC19dnLzQRpNxHAfsPgwq9bZmt4hasW3mGA5ekzFU5vZ9RNisXyUo5X4MdKe",
  "key42": "4qfLvyuHNkf8Kpr9pkqMEZTqWKAXP3ZZ9JbxQQTrc4Td5DDhh5GvLkHV89SdLVCAUeme7XFL3fvrueQikadg3pCf",
  "key43": "39BDtMt4aSHJdtxZaCEjor2KFdijwVm7EoeDB2R5CyiXA4tPntZ1aDURz8NKkzyr5JsvpkooL41QFVjzp7eGsVFH",
  "key44": "3ZJ17yvg1BjwpT9hJB4wgmYVtjemXewuGTVSH4RzKhSVG1Zt1Y3DwZpgEyHwGqA8GDmdQMmyAH2QtBGKf3JwHA8x",
  "key45": "2WaUWC5DrG2KkGFhD2PYPjcnDUezd4MH5G29qsSDV9uv8T7wFmZFSkGmaaNsiMky1bazpoNbQZepmn1GyrK9XUL6",
  "key46": "FSL1iq6k3Q2pCLysEu7djnfNcc12pUVhh5o6Qt5szH26FrNxLTymd7H5ufatL8tvGNpgw1JPW5Xo9Pv8n6WnuDt",
  "key47": "5j1R9B5ZpiaCHMwJ7CQdA6uXwgMt43vt6Mgm9uvFi42pam5zU7aeC595wY9tSNo8A7qQw127kJUidovpQrY4EDQ7"
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
