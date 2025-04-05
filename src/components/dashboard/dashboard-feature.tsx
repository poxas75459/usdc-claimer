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
    "4g7tQXFVtWfnv9hXoGq5RN4G53CkyH3tHeMvU7Zo1fBLbUt3wpL7NRdNF8Siosvo4HUATmXZ7iCAjVm3yfM2UmBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SnrpzLaGAQrt4titG2bDxpxq3Cd7YWUd2Zr8VqYYUXT5Ca8h5Kk3mfN88qsmNKzFDGSEtzhBBqfSwxUAApHav8U",
  "key1": "3wjZLzWWrzb8XjpaNqZCMjr7vPgduR5ZuVBiVvpgRezbrn42jixT44Pg6XoHnHTtcGiKcgBhEXGSq5jZpx96qEjw",
  "key2": "sRdavX96mpJnra6LmQu23yQVtD77ST2mAP1Nsp5RQJsaPLCy2qDhgpJBWjhLgcRE6Wmb2C8NA6zSzxwuYYxtBhD",
  "key3": "kadi5YpfCqRp5qSAU3DEuz3iHXub2MxaNFetoZzxJmJSehGaCofF3HDsZ1tHP8s32PnaA4hw1sh6BwGiaVdxdNV",
  "key4": "5MhQc7zFsCK2UcxQMjrZS5u5qND68nzDTmHXeEF5m1gvrdWZ8PrrL9bRpayfsnSPKnoFmEGeaK7ACR4s7SZJ7wN4",
  "key5": "24WqZiSTXCVPwbdMtMUdN7UaaSNrqZ1ZvuDcwtJnR5ne5PE9R4twbb7HRW3wfEy4tobWSD33L994qRPhz52cT1yW",
  "key6": "4dhmkFZCssXJiTcPDbH6VnPSciYr6zM9gY1h35JgtQ7Kd9givJKQ6xL7zGQivfqTtkHGnp27zijTqqmH9Z4RHveB",
  "key7": "64xpgL36VtLQdTeXVcyANGvZoPegavRQw8kUaerrRYcroNtYhxS4GDdKJrvQTvVNU5etSUaUbwM8iEzCZmTTqDg8",
  "key8": "5SGCMZ5oJvJU8Wj5fdbRj8VfZr2eeHgCL2VPPTsgFuYECUqM1T44WJsnyDdbx33hC1PsA3SgbiRH8Ur2oDBrU9SZ",
  "key9": "5D9Suys8QCSD78zYzETK34Ai5KNFJgdr6ZjWNuzHNUDWdL3TZtT8Uo5qMntLCjvgnoAc4GS7JnRMVc33JP9Qgii1",
  "key10": "3XSWJAF5j3o9FMf2syXwCYB5h7BGPowJXT8fqQ9Do6qRfcQ96fb99m2Rk4L9n1RhBMWRVjJUkwBYkT6J5aN7w6zK",
  "key11": "vnWsBYrYgYZbYBZWNVRWXihtY1WFfSu8cREKDQQpNgGPSbdSyjL9E3GAHT6uGmjxv5sXDvwG5eQkKAcr78aR6pZ",
  "key12": "1298gR38hAPjSs9oKmvMK55LQeBJKyKKLWs2L4Ln3ghtKvZvCWHPhkFhf4KUPHvUfqu5UvkHgsfXsVXUbunDBjNo",
  "key13": "VQqr1yeeJZQ4zn4QqzRLbgCMRF94zZRZZQatoNwqDFRtuWpFPpRxx9PmZrAx4okJQGLa4V57o2vNHPz2366dSpp",
  "key14": "mcvCqMEyCrsVBjZfA6ukPu9HVg9Vo6CwbpGKMouf2pPwttJjD8HUfNpmH6L582eUxhmqJejZt4v3VcFbiMHpQnN",
  "key15": "2jGkPk6XCPupKhxryE395Hoi8LZXetdtT2jbNWxTMBCxB5Ah3qNYSK5JMDG1LVQL2ET4nqTpZyi5nd7xwu9JuZbw",
  "key16": "2GkndN1HMZYwT5zArbriCwESAJ3KSBGuxWvjMi6rA3TjYeN3QxJuSZdpMLZSP4gP7xkpRmKUpuaKrbNUDTERqo7T",
  "key17": "5iCZjUa7ztJardgKHiRkMV7tB15Un6cADKAyRmzRo3qRq6eDLkgdN3wcR4RpcfBPiwZAHdfrwudmGWh7hrNe9wuT",
  "key18": "4JmME8S44NDsHA3PdVBP2zc6KXd2dapp6oGxwNgweiq5HmJoxkXWxCZ7F2xokFkckifTUGV3mysFmJZtZdEdfnuF",
  "key19": "3CG6TtwuRbPtoxF9zQ6NktajA53LdCdJZuXt3vFWNvtDEXjhLXK7Ln4qEmwdGJcztWojteCejDVr7VXzYaLewmUj",
  "key20": "2Utoyn2EYQr8pRLyo4QW9MxXFaV4TH91V3w5bHNEzgcaSF55ajf5bNJX13TJt9xiuZNKkW5h8wJFDwE5h8vNmUrq",
  "key21": "5DE7DrfcZbUx8m4ui47QBLgC3UCwaj6ENmHBDhJB9SPgNvQmeA68LvQ7TkRUqr1wLGBnQ3N1GbhkWXoQLzbRi1Rg",
  "key22": "4cvZhQ4hYPFnVT6MkGMBGFCDkiMX11ARJBvLK5xUYtuEc49vwm3by8PkdJQ5t1PT5f3cz61FXGmFcgj3h1s5Qv6r",
  "key23": "3C1aQxHeBTi4dfYLdyaBi2aq7CBjHkj25KUXV7CRFBMBGryyEkLvqwL3myPemT8okvEwzhdFHZ7yamGHeFLB8YBf",
  "key24": "2ZCpQM431UJXus7BDcZfgMuUbHqQ2E5V3eP5JGcz4cVsuCXQeGYAZtNw2xYumrxs2k53FBbXGZ7K1NSyHanXzZ94",
  "key25": "4pBcAmGjCCphQF465X1WprD4FcWq8TYAnn3hLYH7G4UvYeNuQqLAm28vmN8p68DhUXUBLDa1BvZ7DLSZttxrDw7b",
  "key26": "4TDWwKtQuRaJGiih6LpDSebUCdja9Ci6Kh5JXmFhMZU64ERa77dz2kbi4nY6Qfcx4pdUi5kBCDqVuubphQnPbDX9",
  "key27": "V7JGF6gVSsJM2muGqRNyA5ZL1Ef5q8DJNtxnz1tGdrARCLbn8BgSA9C1cHkUeMfHueVKiCALnLA6oY1yyd8UKrd",
  "key28": "4A8k84AvJ3AEC4YKArZd1kbi1SfGUoQUHiL2wpffKaDmeEkD1fPk35vgAWRjjW2cifA3hFFjqVAM8sDBu1LjFLR",
  "key29": "82vjig7dCYbaXmRiQhKZATyFwJqPr2YFkotpsLuBSvk3KhHnZqomHXMzZyZYN37q17qJxB1gHZuzd8SgYrSFDx4",
  "key30": "3d5JW57PDmUhNybj8pBWmYM7EBpiFYPqhMuzGRPMEC16KUvZ8QeouzdGirT4LyXDr3RH9zRj2kSJP9gGPhcJRfCi"
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
