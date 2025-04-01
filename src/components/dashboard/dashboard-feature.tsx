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
    "47JHpZ1sqkDcgoLdBrGnNBkZCDsxpjxeFTSYDmfmd9oJP2ga9Dy8dW51ZjRUgS4EuW1Q3Nc3AeVK5vSNemNMM2a9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LsUwr8Ai7B9TRmo7AKtGnVE7ScSR217ep3YofPjq1oMwe5PukRaWJHFuxwqMUHUrfAQc7pbYJWFoksH8x8ivUGo",
  "key1": "31rtw6PNGfdt3Yf3KJB9wv5FrqWWbEQPMNMReVrq2qtMRXx6u18nEoirbHBAiDAWdynSGUX9DibkxKjx4SxXVehQ",
  "key2": "5DayM5pCEUKrvVPxJRBp9TSrDv2ewJVdmHbDTvAC4V5ArvD7u2RJswnPwXvdDZhZKSpbb6mEReFZ8ZB9JF6V4qSe",
  "key3": "5RppotKoQMAzoyiwvhAkEYWxnsT8npRvmGhWhUo1SNsYNH6tmNuTvmt58mvHcAyvtVuEFr1BZ4f9KcPpq1Pxj7NE",
  "key4": "4mJJLh9eugZE4Deb2gZDHR1XDUJa8Mbg4gXKn97j99xVJ82HkxUks2wWCiZhXfvtZvQFhvLQh2EQtmJFjb1yuWHo",
  "key5": "5eWxXtXvmsYpNmciFbwezQr6ZY7TQKvia2TEDJByK4foKGdMcDDPWnbmod9KVvnrGBgg6o7KCfKYyi53TtvGE9M9",
  "key6": "5LLyp5pj2iauB8M9x9N3Q8ehoQkHousoitPnLpMx91pvYSvjSSBnX2Y5ESqJ83CsC32C2iprsnrTkq2ms33yMLb5",
  "key7": "2sWXEBBrtWtVUc5Qnq2P5ZnQDtf3ogUZuncMkkTe5f2iHTLtBsFTSaghx35pXN4zPKV91juRF125oExPWNEiMNKd",
  "key8": "om1CdYqU8QJ6AQ4oir6SVPdagNcEQubkGYVHWuKigUoBEVDV8GZo5YF8zSssFNiterr89DNshBno5a3ugcUrhS5",
  "key9": "46nmgThhKDotTAdMpNepougb2aeLTCvu6i8w9RrLGEHQEHMtVmEVBAHC5Pnw5TpoEVnH9qKydMCy6Djj7jUcbdqn",
  "key10": "5x6nTjt9tkfjYNhcm8foRdyaovf3J2oTGVASKMX3NPupjTb1NsoJC2Zb3yP2Rj4j5SkMFDTgEDQSMdZsrXWnZ9pi",
  "key11": "5xi8muL3UYRdkH6poH41zqdq25iZDsuRLzPdTikSBHtLQdUFkUKNGEkVWFCdV2VucxJevfpJmzncZ2aA95BxKtri",
  "key12": "5sVpyfVMJ4NX4YP95HgWmzDLye1jPB2M7TJqnJmT4LUbZ1LwW5SCMLCB8ueDdua3b9RsoJ92fNrpv9zv36Q1F8p8",
  "key13": "KVmEz2rBrgKqXGYytcc44YbwZUYu2UGpKd5nZ7ZfUDf9JEnmFaRreQSWmpnD2PTE7QYh1hm8jCV7HALRXD9Tjya",
  "key14": "aNYTorgffSTacKG7yKZHDdmJYoKBR2k1ooKraJQe3KopGvDTkRoQkV1wkfWkgtU9XuNa6vdSJHEBka7EnmUTycK",
  "key15": "2284LSVbfkJn9uXnijCs1JN7NsuA4tnGbi4GhqZLuboQeBHwydVV6uSgmDU41hH2uqZg7icKWujrmyXwTnCsnAi2",
  "key16": "nEoAcMADrFNaxqoh3yPDix7Tt6bitnP899NJBdxrFTscSZdwMDsc7JUx1sf2uq2t9mXBJQPtc2VuxbUdGDDd7i3",
  "key17": "F4qUgwnvqJ35grP3uHdG1U3VzRKGYy3ZXAui1PmHf25Uk7pYJAu9K7wvH9NsyDwJSbseqG3rmMg6TbYWpEG69ht",
  "key18": "2NsXs8KbMWCq3LRUjfacBXYXBmFfd7ykSsbdfLAhn9i4GcHKXkH8Twf9ikSueqNbjos4ozvXJvpjFALwk2M2uaK1",
  "key19": "2gYEtChyPqwGFWExnc5AYQUYn9iNKwGkhT1tVaVLEW5i65c9ynJ5Je1SQjfN31edcDWTL7Hj3xAZ4euVE88oo4qG",
  "key20": "5eEhqZBXty9gKaNB3pJu15KBVhLvh7PkBLHECQh3gFbMyuncLX8CFnRTyrU3mS8Z4P55V4inFJM9RhJFadRRrYwE",
  "key21": "2zNFw2ZBmW6w8tp4BbVo7tKycEtwN5jRfwMSyRCqYpQMz9FnkZLhEbt1Bdg5uRG5XDBjhFa9G8jJmCJbwaYDpFpG",
  "key22": "5psYSCGuNAG6DSJe8CNxALrasDSvEp4Q4FMaJyePkc3yYUR2x3HF7Tw21cFcuoLhWiYjKSi7HG4d7WSJthCs3Raw",
  "key23": "2JxqhSmsK5BHQCG81KFEJjvVGXvXz5F7xMzCDfuiPpJutibWbbffpwLmUnSYLsdC8BfQ72jgVS1QA4hGsvvY7Gdz",
  "key24": "3jJfWxAEk1hRbaRFaAs1iXRpZpw2XetAjpp9zKGrpwKLeMyAbc7fZDbnBwzHbtfvYLx8sRHEg97x8Hdx3AUwMUxK",
  "key25": "PX77yZBJErXQbf1GG8xk9uriYJcLRW2ETvjSbvHjh8wcW46Mahbu5epYLGSibEAWW2PTbheCEy9FtnExhisyDvM",
  "key26": "9fxiwYfgosa94ZEGgadQe5mVwC7ksT92qtFRKpB9RWEZJzehrXTkvC1JsgWjRo14XQ9Xa3AX9o13Pv2JM16oGgL",
  "key27": "52dTYbj1N9q3CivFHXDQhfGN8PFW3agK6D4wyUf1sMGD3v8ryYuugKoXrkHZqygRgD6gnaTJFQk8atmf2HLXDnHV",
  "key28": "3F4K3aBVFNfqUPQ7XZKuZHeGmuar69xQwQCFFnyvL8va5ii7dsbhXc4wAMGQ7b8WWHM5gt6Fdc33TdrKe3nd33PB",
  "key29": "4MLDFS8veD7AbeYUL7g5gmPJQWUAetchZbJAEEVeUKpn1DdpxVo25vc22PKkw6PfogU6FkS7jfP2J6p3XWjmb2JJ",
  "key30": "2Q3xbS66BEaQgboPgtBR5Dz6unifQ6tnxsNejtQpCp4r1ULgpX6rSF4C7tGr28HhJFXDCuuput8PcAFDs7XNaQR4",
  "key31": "4MijtBb6n8VdChaK9LXBbusxeEKw7Zf8zqwAwEdd21N7wL3tTYTPvQexhgjH22YrApZjFt2dFvU96ueV9ReCssbR",
  "key32": "35jQHAwQHw7juWonxhjkByQCfxiXCEASUNzkmhnPZ3H1oWFq1TAAnMdjsWDdXP6gYXNft9oiiV46xNtxDseMKmbF",
  "key33": "4BizN9WSJvhDuhD8GfrgGKRnnNTnbxL6wR218rS9AQ9qSyXtSpRahctHBVLr1qyqzMBczeYDp83AmFKTi3Vr7UCo",
  "key34": "4Maeoox5sevS4tTDhKN6r7muZsf8iYXAQQ6imTC51zPk4Jy9vHu9ZCDKUFVaNQv42RskZUf1JVPAtQABHNnULBnq",
  "key35": "5ZVB9G291h4r7qUtmN6r6ChNWU6fa8QChVNaUSsxAfKbK85KnaF8iJsnekSXUtgg6nm8gccQGfUUiDhWzgMfQBTV",
  "key36": "4HJBibpV9jsGi6t892WDzHJX7JDPCFe9wtVskds2azMa5XiZYVLL43Ftwcs5okmipyi4WBLkr8C79az7uUemrXwv",
  "key37": "2qUcJgBJxHRMjZneVXTzFXQSLHdBUyZVnkiEbbduD7J7xJyeZsXwASTQCv6ckGQwjLdr4nooZ33GiBw5ed9SNbzs",
  "key38": "3tJYtiSdQVoyorgWFJjEQWXzZGCb2Ce4vSVExbnEzf6aMvqTV3iHKLUttTjj2X7kVSP8YpusVJHj8PHoeeqFKSGc",
  "key39": "YpSpJgZ2vYZZuYrM3pJ4M84ZhQ8yzE77mMJ19Kjdsp8hc5v43C3FPhihSBh4zhj53vADCyS3FYqzwT4VBy3iMn8",
  "key40": "xj4MYfMNLJDqycY86B28T7zcFKTDdQ8RpCqDC8Bhtfp89tGuMKFoQLa2boVHmiBAoZawS2QBArZMyrintb6zK3S",
  "key41": "tnsCczCHTXf58oojTupUaXoMZkw3nLQT7RDB86EJZWYsEFnJuhDiwTbTLKFWXqohZuzSx7jqiukTLqv3PECY8No",
  "key42": "5dzWocoYq4x1c69wFY4jwovZTjw2rX3UQhxczywkbSh3JMJ4d2P2ACqhZ7futgNSS7vHMBgKbbxutxyUKVh9ifwy"
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
