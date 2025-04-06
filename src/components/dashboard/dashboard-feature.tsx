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
    "5pTtAKm72XMa1zuCnZhkGhZrLLCPScY4jX6xmjsG7qeywpPS2Vk1cp71kEvRnNnViJB4MxnaoaZrAVdp1q3VaRfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r85dHryCGyE67zPXZcYSREomRSzc7iuZ9GBFrhSYTHT5iG4mcLBhYnsmG9n6DmK83MV6R62estzr337AUSX7uHR",
  "key1": "31FXjVUr95wVvkSAdhXZ9XZDV9dgwxytFNbLJoPBMH9mtZ8jGbLCPftNrq27Qr3orheThVNo8Btih9RCAvNhpS8A",
  "key2": "1Zf7dUvTq2pHkJ3idWHkhE3iweD6EjYY1TDASGVEZ15s1xmBqcSpHEsaD4opp3AjziXCGCRVwTsXGi8CbXHKqnc",
  "key3": "jTCRGsMni7F6gsirNeq1Bn7ES4DXXdbxab2Yi53NhStuESuRzuUW5Vh9upU6VNYeopVPRjaFdF9ycMYPwtx4NHi",
  "key4": "3PzWgQWU2duuM7WayZUhGScwBdmaUPUDvDmbMB3buMkTpeV4USz2fCCeMzi6UjAhsj3rqTmyq1CzqxVbay4VVwZi",
  "key5": "4MnbUW1Lb4cdeqhx8NKQyTsDVE1PuS5SPj5VGMAiT47WAKWmshAZ6jTHaYCNLHTg3yk4DJRKoJMEXe3wHjiUNo6r",
  "key6": "3tMXtthBvChuNcuvd4U6kyKonicwRtDFmcgiWWMTRjiY2TzfvVsYr3d2pTRPGp3gq84d6Q7SDoBCVx4UfSvmSFae",
  "key7": "5Fqhwn855RC5m4EpMiKrChkM53UV6mBpnTkS25FLEQAdk4qcaM4xAXjktV1YM9zPSAS3P96RUZ3Dcxo4ueQeJLCD",
  "key8": "2eL4Td4kV669g9QWizw1Ah5o3fghqonMuj5pYy51aU6mbTtpovwEdyKZZ9sKNrVQ5F9XXWAKxaXhnzUEKJLpidMM",
  "key9": "9beakJVr3WQBvGQNTkryWnUpoGNvvfsQZsJZHx7Erfs5XxuDyEFHnjYsFvVCZuYibDz4pmoN75ihUymF2wHQwFH",
  "key10": "3LMsoX6xaVLz4MWoCs3X9UBrBWFbQRmANgWKAcW7cJYJ55NBb3Hv8wSnavunFEP26VniAN3LRqo4YhMEn1Bz2tgQ",
  "key11": "3FT18tYkbWk62hw86QKFtwD977WQswF4yW2fXFpSjjAP31AGjHRKEqSZ9DxFfVmpMuWhVrbYqcPqUtnBcnYSxJym",
  "key12": "5Kyh467z5r48wQYdw6ghrosYPJcGyyis9hPCmkcwRmvcgqk6eXNFi2YRrAdEM6xphVpwXLcrf4kTcsMyJ8ZYBPHS",
  "key13": "4ZRNWfMovm7qj7TkXrSEtZuKkpaV2g69f7wM86GFCRJ81BKtibenJ2KgtNRKu1M8VTVcoxUASKJCgyEwPDs88X9V",
  "key14": "2AVdqcF5ZgAVXoM1prF8THndt7fNARRz53QYVEPewqci4upru4JrMnzuqd5zjKTvSEYurzuVBT29p8cGNWEG9vTK",
  "key15": "2d8AxhDDJpMR4tf2NjdMwnGHGe8o9zUWYeE6QXoErj7beCdQM7YJAFv9uYEao6vHJNdjDBSd9iDC7idhjNzsRqGH",
  "key16": "2rtF6m9ocrHkHr218vHDLu1cweyn9Uur67jWR5PCcHRSGi7FeaNNbBiHJrauF1fhtkCcbjqJNNgQCjFGKnmDsNxF",
  "key17": "5zZiUH8jryfx5CENhjJkmuA3DPrydk3XBAwuYBHMQK3G59CpAp48eYMtCmXbMfkxknnAWKGg9xpcbn52C6cd9aZD",
  "key18": "nLBfMjzLyDViDivMj4gpWkEcgwzZtWWrkdbcBkRzGPNNQp2SoEwxFoVLH2UoodfifueFr7MjtVyGjmaw7x8EtJe",
  "key19": "54kFPaubLXXjZsv1kuxuzvxsiofKj2cRAJ1nb1UPcHVpBkpTNZXeUV55ZyH6jD6rBCBDXJUCFHLeZkiH2dMM9mJV",
  "key20": "4T8cwuzhfedDPGoEBzEcY9Ks3rLwiuyW2EMdKPtVZsWEJW6muej9aDaysZ35dWoejiiwqKGj9eE4oqVUDxk39gKP",
  "key21": "23R17c3NdLxgyBihcUKVbnoekBgryX39xWCTtCqqX2TjcWrycufwrLkbDhhc1qLr5kn8KaKgZ5GRU6EzonCd1og6",
  "key22": "5Bd611a1QgKe9w4nd6ZeqRvyRx5PA94i5E9PsmJd4TkB8yDSAMUGEUzFS3ksPHcijviZ95QBD3wq5pHvirg1gLrE",
  "key23": "3taMUbLNgZhCq8f6UZ8bhPibQXyhQVL8ut2AjdfNbMD1MUbrMQaNhu2GxV2izNhSaoy3zo4TzMvuRwih56uk9eKR",
  "key24": "4CHwNupbE4hJ8kcV24WsS9FRjE73JR1uZMgRVTcvgt9YGingozp6kXQEfwjgMVPRKoHGBSCK6M8sSUqkCVywBcdi",
  "key25": "2RZm7qkoXXx1PRzSXfy84zcfFeusCDJT7gDmduxEDWzLmukQMzyEdKUbWNsvc3z36RTS8J1A28J3kcTmpkmwZZej",
  "key26": "5KBVopT3gPY3JiUwovm6TZwq7QfAPt8dofFzAJ89DwWJudAcCcc57Wx7j2xSRwH3SJ8vag1c8HTVMJ1xe18NPwAA",
  "key27": "3fcqTe3ikWBVsJBDetLsKYsc3KGGuiDNR914LDemu5Xa82xWcXtwRo52y4z2fQBzvGKodQPKoWoSWm9mCe4vnMmR",
  "key28": "8UcPfokyirbTNPG2zuxknicRxhNesDeBnPy9bG6mSvfFa7CivT1iz1K98hXzWx3t6P5Tk5qJh8pEgqtMJr74Pic",
  "key29": "4mYgwLYC7oNH1UJAFxGJmzwbvRq2JpbZdwiQLpgVoZZzhwb1iHWG5xtvXHe8pnUgn81WK6U33w8dwNhG59cwkP7N",
  "key30": "64X6LDahMg8MJjBbTWNwG6V1H987L2YrKxQV5CLF6sNT1oVoVHYQV9tivXvu5h8dCY6n4aKZqKs29rp23jrFb38x",
  "key31": "3Y1nt2rZmGmZpge5dQ58KDCEaEUJ7dSYb1psqbTQUccAYGu3gQB32fMSxrNApF3z8fk238hajXA7XFVmSETRzmB5",
  "key32": "5zgNhxwoAwETco4VdLYLJ62PE22xvfnYdbjH7STVcMFtV8CgHRKYaZEFpejHv6wERsNkK54zW235FeSMatdNQyC7",
  "key33": "bHVHSr3R6iYhqGYZtKUSy79pNfwQ5QXNTJg3jFsVtjWCVr3MZcmLa5usAGgAjyBaM2cV85Hsssp1cdT4UTg3jek",
  "key34": "3815p2QFg3B5UEX5otsE9wFnGkNAS6i8KUb668ZgTLLmHoBDwgxBjjM3GDLP92aufyBikX7hyQeE52137ttY9aGR",
  "key35": "2FQjSaAdiRWVsmmAnLg82KtmpNucbwKsm1kJckcnq92qe1M2dTWzmXUJUT838W8qY9qGT3XZrzKrngo2pG4npd91",
  "key36": "2ZPyoP1awzg2Rkwm4GfriermDAaVd8bYrXzcMmsF8FqAEhaH2mMFKd9ZdMiwF1rPsaEFwURN1tKc48dWhwUd35Zo",
  "key37": "3ebQfeHPb3m2zU2zZoMToXYS7pMBq5WRcj2L81yRQypC5Co2kQE6oC1NXGJX6ZB7wKUfTiiv5RsJyEkgxwRxQqCs",
  "key38": "4z6yKuaXNBy8UjA2YzEUZVEUvhnqFnaGKnC1xcSpzAWcT4NNCtwpmrFUR3FQW7dYEo8Q6rCpfv9wu7CLmPZhR4cU",
  "key39": "4eBE5wfznbbtHBA2EJLHnSAdJphEzxi6c52eZGekSeCM3BLfHa1XR7DcbhGw3VBiJL7mKaRPK8xYigngTTDDvtYV",
  "key40": "XzzPKw1RrmifRZyE4TXZZWtXNw6WcSgJyPw4rrgtCgdc9PU3qiWVhUQqE5zgjRChDmhyZBjQ4u1TS2LknC3NWxY"
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
