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
    "idmB9ScXc9W98HVk6LGZx1ERg8F5RiUkPP8fW8Djo5hMFiCwQd6H8zvfesipNCayQFQDcfeGtAZ1PkLFY43ER2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X9LBLcgHHPHijctWkBM6MdUMP1nfQN419k1wrjUepBbuvM3niqKXA6MMMvQw3raFczfTCrMgSzkbW8ZRjBA3935",
  "key1": "3Mc2sjQJYsoLYESGPF6osj4pCJQQdRJtZgLMRDLjfL2js9VqCfXMga2zLmB9TCBw162GiCN7JeEeuaRH1qK7McHc",
  "key2": "2VNSACCVNREHQmCUapZmw7Qja3CUBB2Tpfs9LSA9efvSznrdAiBSyT7qttsxh5iV7hBuSJYw5XacK8JdndGmYBRf",
  "key3": "5XVeG7hE8FbteCeZ66KgUNiDduJ4XBu5WG7pejyA7obNexJ46HjT4VpTDtCs3bRuM9eHajTp1zaGfrSG4JY6d8de",
  "key4": "64HatigFn9HkwjvnKyE7XPopiiApxRPUUegVviy4q93iX4es9P1jN5K6iRuFyVGYTqoNbc5HfwLb5o5SCXqGQrDW",
  "key5": "5cNJS5f119G1gM7wNjkcf9wQgcJws749XMuL3KvwDKoC7d7JiJ87heNY4Z22rQtsPzbiPH9KAAJXpM5tV3WUrrAK",
  "key6": "2Uu6L8pwjRDvArQA6kfHPpt9DG72x4Bfx1NqCzkkBBKCHeVHSC7yHU41c3h8yerSrWSWBnqh3HUuYuxG9Vszux3o",
  "key7": "2LcpnuyFiXqbZYfs4YjDZff8XqxYAuyQVbs1r7x3gm2JRvMUMoRjpQN6WX4C8t8cotJweke9BPugG9vQGu3WPV1w",
  "key8": "3pJxzZYFWh1r8sCMScRyddG95SZCn5Ei8MVn5vtJ6uu8YZ7g3HUUDsuJWQNw4axz8JsVR2jafd49f21seHNcPr1M",
  "key9": "NMC69aP1LSHTRSBp7fNRQLX6MS9soFs6RuXbbug8eCFy6twAprxCCUk9QHQrovvWn9goKLRxfb48ZHmk4RcmaMk",
  "key10": "45FiD5hR72SxdWdzgoGtgR3QMW7NLt6276QPNp9R8xNw8vzLGcqWsaYUtFiD8mUYRuSYJFA2RvKqQ56FM5HXdpMs",
  "key11": "4kvUixcZ39zytLarZmF2sfzLF65N8ZJBCg4yHjkMymNYtrE1RVcQNiNepu7dFTRJLzcTLG7PMpz9SmNExxiFR2Qc",
  "key12": "Ley9r2u5nhmzxgptj5tweKa7Y4Cn2jvt1zQd9eqExF9oruSHxAzq44CrdPgZqQiGeMzxutSiRB4tmM4S7u9bXRr",
  "key13": "2LJNSBCzqMMrhiihBoN89H5tC6dKB5b1UpQm1yE4TDFTdsX4SZfyFi5FzAJ8qt7mWHXbphwex2c4b1Ldnv3LfJyJ",
  "key14": "551JHMbjMaMM5ZgTNYyorqRm5Djz49pwepgKYeWNk8tJWCkipXD9DAyWr3d6FdB9QM5Q8BR49iMuZth7YUB3Qrvo",
  "key15": "26NCG1r8cNivQx7Um1z89c8p2tyeeQWHV7cYgcskKyT2iVQWhXJmm3LJ2zwkHc2mEyK2943NoB7K5TdHoGNFJ61o",
  "key16": "2DMBWAmWMEzz9miXjPFTAGMX7fYNLvjEKoRi2utrDdhyRSZVJReutu3Ay18CJjpVrkZeYmSfQvPPbzuSQg9djQKf",
  "key17": "4e1guiquuGdz5WQwqMNZ4WF3idRnLXJ9noTFyRxRbQ5wjWV97VLYyPQc9s8v8wQ46X364tG6wKCSZt2drLhjRbF7",
  "key18": "bsKkHPmPxhieZxqnjmFzNVaFyDVWc1PisSfn22iBBQtKa4oEgdzMS4FkHLFTB9eCLVMCN1cRx4cJCzAejCDL5Wk",
  "key19": "RtgpYCCibwVnP7GnUJQKLdvBfGZZTrDBy167MQT5yQ9Wf9P8rD8ZQwyJY6QmmQoeSiZbBVYkCoJCx9wUy4MXko8",
  "key20": "9sHo4sAVqnLMLwgm1QQbnpwpB5or8PViU2MgyDmZSLrHJWdvAvsKqUmU3Z11kV68pBiQdVfxLm4CwT4HGqxAEeb",
  "key21": "3bzUkuWydE5cN2bcG5D5rgRE3eVNGPnYYapyyNgPtEueocJJpDKSxPYWX6pXjzBmnnGSCo6Jt9V2DxvWtmqJJ7hd",
  "key22": "3kgWASqC5YYrEo64bAdJpbj3GYpQZLhzJfTx4RcDDHCzY9uQw8FsPFtHjL8ger271nSXkTio2bMp959nep3EspnN",
  "key23": "41o6x8VnWkpk23nqUEcyDAUxyBgo7BkAmfUoUMAPQ6rxwxiDsVVKyqqomucxbiTLqFP9QbKh2sXecZRpsTtU6eFx",
  "key24": "2Kh8VeJVWPQub4ct6ba3zVz6HxNSGxt21Bh3NKafTsvb65eunNVKD43fSZm9JckQJZPKkuBQXS5VVBgJnYGwtPFd",
  "key25": "49mW2hyjAtjx9fbvhQQifUbvaq4xnsFfoRwj5wnWecDF4sfvFXoqjo5RqngsQD37AMnDF3nNZGfdakEqPVPVoi1r",
  "key26": "661iwMFQLxXMCDtYqvAq239BztXmrKjzEx8b2LuejC5WuLaJoiRkJzXNoVGERteC5kBAvCCRrFToXWesWdhCUEU6",
  "key27": "3wedvEGqMThLaMsGNKarebBUWFxVRUEwemMPLBDNz5g2FQfVcyZ4fQk4MwjqChqh6jXd3k998e3KJbaBoYfbsULp",
  "key28": "5LpVs7GW3Y5AW69hWRpCRnSGePnRi5RT2pVWr4gBGeyd2wPCyRZWxbDJ5zAryUtbAdym1c6wgoKbmPBvQV8vo8au",
  "key29": "3dkZyUkA9YHm7Wg3xNiRsv1n1d9JGUbittFq98Tw1F5UAg7E2hyVk1PwW6XDFxd8H3NumjBYEeJEb65jGsE3zveK",
  "key30": "4rnKo1Ri2fY1jH4UgKuGVcduHeiEn2ALfYp69eyn7QmWUACoCxD5w5Fj9aHo1VRLa6Q5nbpppipSo8CuSeuREf81",
  "key31": "5rrEop1dPH7FD1Le4BaanJ9GiFssVrGwJvHs7FEvYKJMSdmKgrEPJVfLecC9SZz8HpJ5gJao7JrhsDM3MfRtmKnf"
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
