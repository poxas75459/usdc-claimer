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
    "2saGUMyhFvHksm5va4Z2T1rGdKdnzD4uQ5ihTN7JqL9ifHA8CWNN99kJynVT1PA4nLJf1TSTdHpDKwFnwk7FtdrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Av6bRSitQHZGTAiRQRfK1T9f1im3PekhwJL7XUoyUMCNFQu3Ep9XsDGsgqshRVU9ErbU8dx1S35jqjMuqWopqXH",
  "key1": "5aNpC2LMNSvuciWrkepQcVMAkdNK5JYCyGkTCpy7t7pM6J6rDFswfmCi8iZPRh39yT1XsyhHtTe4qYZoBTgKeP85",
  "key2": "4s3TkNmYUxXHQXbQ8DKY11p5RfbajmaQ7M3gMzFYLyAqx5TwBvvm6thn6ytT8YVkkwDaemSckxh6WiKuJ1wwVgv1",
  "key3": "2mmNSxfYmPHtQj3msNUh9Y56VYQKcz8sPYPBVbHJUQNULAkEttEkfBNY8CbnrbXCg8gRfJWDqssqvr5MPHf3fGXH",
  "key4": "2anzLwxD9JJgmEjpz6QxG9tBkiQJCPWXfvne4W1CDhDibUw1UmSRkft4DXdM5EvRitPvAJYfvyw8TTvrVS59RCkW",
  "key5": "5mYFfj1G4u69XPwURrE3bLWBRhRE4GsffjUTSxxhrQnTydZgi3VHPfGdyuBBYsRvEZJ3E8ZnUZqiLtnnXUpH8k2q",
  "key6": "2d46uTgKvwgGsMB3BJgcgmyHRTpZng8BuSis6FkShZxuHQYdkoar6DFA56SosrvZS2u6YDxVgJZddZuwY1ANWYnR",
  "key7": "36vNsQAFTkFEGmxaZkHvvm4hcaMbanJeheBYc3qnBppWHqshbGLz84EdTLvgk7EZx3Vt5fXQUwVdfuy9oDKE48JF",
  "key8": "2BvqCAKAW1y9zQsEm3278dPGs8hV35VfFHWaVe5msnpy6zDwRR8uhzGiAiv5piCtuKGDv2d6ijtsMtzBRcBC9sFG",
  "key9": "3f2aLsPYD2MvFeB8KyHvMrNm4ccb9HjPWbJVJx1WHvUdqmnAmszPfavUAK2LoRPiQBNCBzbLFtUYuZXAQyeM8D4j",
  "key10": "Jh2qV7mFKqBsHfP9YoVK6Gyj2DjEAa8LTVgVD3MqDoppc8cEfhGdwKYfkrTRNWM5183J6W8tJcW38pADc8u9mhw",
  "key11": "5nb15zjxhVBzvDVWMnGcvD8UvRSneh4GPeudpzUwMDpq436Box2Cg8LoW3t4xfgT2QzVesYuYBWFwpwNeQwyZ8Zf",
  "key12": "2SxNgvMM8hjYpTNPf5FAFhGEuXw44fys2uoFDveuJsdTTtW9wU6B8QqLAdZwZMNLmmQ6nRhNaXQk44vZXe8GShfF",
  "key13": "2tUvaz8uyEnQVPGQis2ZMBaMteLa99K2Euow61pe782WLnJNMvicUApz7WyyCz4fCczxFRKrmAK8tSdUwfbuufCM",
  "key14": "N4K8SioGy7rTuToXrThRWQRTHA7JqPEwvcfuk7AB1WWxN7WDh3qJkXyonmRYuQYoNHW61yFR34JuijPEw7uMfKP",
  "key15": "4xg1woGmyqKPydNRpWsLydzJWBW7hYexL99qeewovMBnNVqV3eaZR8Cq1F4de41EHdphyWpvJ8VuhCkMrnDd6UBn",
  "key16": "4XhWq2RdmnkzRdbgHqwsVG6oxLSL8JpoDxNRk2MLqu5z3RkofRsA1dsgFUQkaJ8STxV1b6knC6JiMaLiFMNAaKX5",
  "key17": "2jJBaqfamDeqq1gEV3XiUPACS62UtA2FG4bRBTzXPURsPU1zCnWidzztfkHcctLsJTvgurPjSvBesVVCcPsP9PwM",
  "key18": "2giGXWDAHXgnEEXmb2uwCpRQ3zrbwumRevACd1tadxw2URYUGUETnTLmkVygdMbK2uiBCnbFke45kZXNnoU49vDV",
  "key19": "2CifGyc87nXqCBpdxA73eB7sTTRBo9o6vHJtv1a5dFy9FAp6DGAUEnZTKiVUc3J8CESNdU5FpAgDAz2Af8HsurWo",
  "key20": "EJX6qPe7hha8XXs5dUF77TuRhqaEaZc4Qpnb3y5fkRNjLDrQ2hFuRz4gUFtsg41gh9vzDB4KEV6fQ5qUybA89Y8",
  "key21": "Ye4bKdz91YnEpaa39Tcucx5pL9QeZdgfaNGuwrwdkU9H2huaoLTJzpfKsXXR3gwBT9PCtS5TBXSroWgtY8kuYoW",
  "key22": "5dNPFmjCepSY8ea8o2kht312bJHSP1RCT3x9QHa7dJqrWDnsgm5Cck2j23DdmRrCcgNiqVynGJ5wfvzcHvCeXRUY",
  "key23": "5LHQk99XmyuuDzuAK7vHdz5QmJ3F7j4Zeg9YVi3pXzq79YhFZoRvUM6tXx18Nh4HGwU76MwasvexYh2gmLMMWykK",
  "key24": "4W3sZZwYpKxDToJCPNLEixG2vBfX3avFYBLB3qsCDRN6U2sdTQeGTZwDG6A5CPWjEmCAQLwg5oshzJVseZaJ7Pyy",
  "key25": "3tp4bm7p942C36YcRLFBFMjMRs3tbvd6ctLwPQv5XdeKaahY3D1KvyN4Bik3ciedMHvXQeat5Hjq7CwyUQ9Fr1sb"
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
