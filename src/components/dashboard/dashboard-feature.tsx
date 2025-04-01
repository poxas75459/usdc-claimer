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
    "EX5NXBMzhQ7fdm6BQGZjj2tZfW98yAUzDpwpvJQ67HgU92YDdsVSFF2o2wdth2fXLutsuZkKWTun5EAUnrArwMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eeErdC8TSQ74zbyTFMHD9abj7KnMfBDhwce9jx5rmw3v9HrQaA2HBjspzaaNuH4rf8Mcw6NPoK4mt7QN9Md479u",
  "key1": "wF31FVBsJThS8hMgLCUKddK2tY93tmYH6EzC2ivkGSdGWzpn6dt5X2LS7r347wiim1AMPCtmYhEKV9qnivZSkxt",
  "key2": "2gPbcobuf4B2FvsMxcyPkgqUUzMJEQwi1Rcktx2c6NKhzgSudB2L4rm36DPKc2fUgGeeezY9nfFquxznVuAHKLjr",
  "key3": "w3Cht1CCvRm2sNYBEU3fwWPoJ7guXYS2YMAbK7AEcDzitLdjeBdiqufEzsv6GrnwWmviBnRQHNMRVgzZRJNZT6w",
  "key4": "2FbvPVanGPKNUs6DjKgxMpbykqaQ5BzM17AwyoHsr9b5pFJDBBtB6Xx5vnBpGdhdBEMGKweTcGmPUaT2yeDUmac8",
  "key5": "5zfix8JDy2L8XtUH6fMC4Srv9HvrXaP8nLBdMw8nTirHfwMGspPd1qzN3CuHpuTsNQQhEArMpnUQ9gHkdPtHwDhV",
  "key6": "ZqaoApb44msywaNkhfrdp2pcca51336Qsha4Fo6bgFgiYbhpZRWP8scFEnwPDpotFNGKMyNeq1ScRALho8PVohD",
  "key7": "2He7sqesZBf49F6gQDEzNUPB6hV68uin6HTkMWnVc7ip5S8uQXjyYm4bubwhP76Txdn7wYjf4w7XoQzN2qxRWHYL",
  "key8": "4j34ANWTVroDtPqHTV57M97yVFB1aBbvFaj7J2H2apHMShiqCNcAoeMmT1462N5yHmUCWmrQSLMVLpHDUArqM4pF",
  "key9": "wLtrE6cyKYmrwd1sFzFAAkBZ6C7i2ujsBj1VTB4MiT9Lfw5vPvY1eGPycBe95695XdSFeJoAiNYh67Laf8XGiC8",
  "key10": "63fYk9t8Zei7YReSofaohzvjTBhpCyYpjr3gyKyfzUegLUWVqcaNy8mZwh6gdAkob7mkm9t2tcbAdWeo6K7nxS3f",
  "key11": "EPL9QMSfg5Xobe4pPdMxUEGuYM2r7jR5hbmtkQxuBPcETADSRxj6sFxjdy7xp4TkuVhtRrryEEjAbsq5NYHLFP9",
  "key12": "2Tw3cr5X6yRQd7dxbB975smvpHNtw9NvUWs8udHPMk1pXHCpFsV66jiVKHtQ2WPPW1B62fiWey1G2SUSGpxKrWff",
  "key13": "4jkmYHiqK2L6tf1Rq6oB5wPdfdSjaeM4UWNeW44GpoD7vA3HFY9ga4AMmJMo87rugBg8ikEfDBNJaCZ34gK33ESg",
  "key14": "2PkME4a1EMhb1zy3Mhd4ypJqQTeaB1AqvhsBpAuYsFKpd14FBchLAXf5TNJF2qpNessMAiWwVCvzE6WEPH76MRZ7",
  "key15": "We7x8NhdmwQgabkHuyDQrZuQhLH4AiYsfEi3MnYEvPQf838f4GunaVGMNgfZFoTDwDLVf8krUT8XaeEmWd7enoQ",
  "key16": "5Ln5C4BVoyVxuysEYfi38v3Pa5LS28jhKEP65a8ge2yynU8iNwgG5jxwdhJsNqRgXoaZ7nisEfvgF6EkVMWghssb",
  "key17": "pXr5VeT8qvUSXSRaphSrZuqZ6UzJTJoxzdCbpcUA9uprdr1ENuzhUMkYRTDv4s1cPDE7UeLCUTzk2mh9552b3HW",
  "key18": "5h7cHzjjbYjtXTqH4ctKGaMwM1LH9jaQMTLZrwPaB7dBJCzVFGq1m9tg8u743qri79dcYWGpHvZiC9rq7UWAwuBy",
  "key19": "2Eb5RxvHQ8XDSqoytUYDp476GQSP645BwMLsmzC1zs2UhCyfGqBs5stbrWQQq8DroTaMAcWkrJTYYjfyR8pmxwZR",
  "key20": "3ycwLmByRczhPojpzepq9vxb963CheMJA7XEdwSkABXWLKL8xFz4i374XCFKobkjEyceT422GVHkSWaNLhMqJsRa",
  "key21": "nmMYaPEnRHTE3aShTXNU8BtBGzyX7YeTtHTDH4KPjXorn2jdBeSTuuYEuM2rfbWS57f9s29rWJcg6g6pYfiUKwJ",
  "key22": "644c8XhrECEVLKupCUkAqM71kk1h2wBuWoPv1wZNzc4QVfDqHRkVkqojc4HZkrds2CdoWtYcGsaFzM7VjTwScvPF",
  "key23": "5Jys5xnXdr6syQVRzHDJ4Zye55Qq9bMWCeEf1kcDxwnPnD1TAcyiS3PUz9VYpJ1fPrbKQeyty98foznDPFSSqwhS",
  "key24": "4iXVmWsiPyFTF6rkZGS7nxzwLSmFqARViL6LFjuPRLTZvXAxeQfrz9uhZSwRg7N92ehhYvqHq3qpCiSTmETVYLUH"
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
