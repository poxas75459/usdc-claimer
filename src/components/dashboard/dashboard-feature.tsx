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
    "3BiFa6KY7EfhhG9KuCdTPi14K1L7ZdmU55QVQiyERAoZ4YEE3BHd1W8hVPfMJvB2TQKf6qb8vSejC7SwfrraeQKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cw6bmwfa3BZh3CGP9xK8Y2UtTZmzXAnUdayNjMHwiqXH8fpJ4sYfgGKr6imw55YsJUoFeDMpDs5f1LNh8XuZxPJ",
  "key1": "26Rm4aR36MmF8mrduMMZVTSL1axsb2C3MPGXK7Sj3vftN2gYo3W5s988GBBaLvjWRyQ9hzpfhviwc9cHf67NrEpq",
  "key2": "23AbrECVLcRCdPT8UxSMWUKgDvyByvcvbgCNF8AaiTG2Xa2G3U2U9WRoRbKA7ZhWH6p9zp1ysHHBfwLHJNWKp3u6",
  "key3": "4dreRMQZbANvfCVPh5Aj5jNb1BjeVkBSbctWEKBhmz7DZfMBGynGisLPToZ9SLp4nFbyESbarXuxf1z8VCEqW7Bt",
  "key4": "4t1b677bgNZb5EnWZ9GPUftrP2F6aMCT2V8kSeZ4QmnNCrESvq8R3uiS9k95aGApoiBT7SU1xz9KR1XMGrhJyAzj",
  "key5": "3uZZ3aB532UpqqxLaJMKDtCHAcEkCpNVTFKMrAEYfkrbRy5S78QmAMBGqD47ibT8FQNX4cZJ2ZREo1YPgokYR86W",
  "key6": "3fQ1RuCgQrk8NQ7qEuy9x9VtVpCakiWecX9JyxtnwZS8yUyfcQGyEySRg71jFfo6B6dnAk3GJzfkTYrj61BBUkR2",
  "key7": "62g1i8XmA11QzFuZcmRWLKS15KxwbzRRJ6gmSaAsS5JjVNzahNANzw59TgRzgbuzQSfNcaEfpUQVbytVUNzcVd7A",
  "key8": "wUfNfZYvEGXcAKqznhMmjx4SLFBCQPiqH6evUyigtBEEFyToviruXoEUSfQMkBzroS8T3EQCpPzi84hWksU1yk8",
  "key9": "2PnjEtMuuDgdVf5rCMud2CPexmaAg8dUfLen5qN4TQ9437WHt155ayhnG8bV5bGfJAygBE9toFcavcnMFMiPRybb",
  "key10": "5q1ZGcAWxLZFdMBR4oJM6E4nbyJtQGATQsihH2eeKyut7mzHzomgLW762a1uvpPMr5SrByso89xNMwTdNBDK5kmX",
  "key11": "mqKoMadsKuabns8K3DsFEDwgBJmfyPx5aGP1dXFBAANkoC2SsChCSSegBPuJgFEidhcVsx7ThnTrXz6ThijLumD",
  "key12": "4Fvk2wWrRHcN5DgJZwgFeajxxBY45HBn6jMdLVp3g4rihN8Ss25HfmMckXdRk5k4o9JdcLUStyAirdZhG32qDbZJ",
  "key13": "btnRoiDRgqZcvXBzcWpJ2LfmAhe4HympFDL6aMjoWAm5ZdXJ4mRfnALPTiYx6UqZLaC4M21ZTKVjXmuy5SRrpAw",
  "key14": "5P8FKRU1v3v12xFV1pAfRkQoRKbw9ssjFsr1y433FaJJJXJ11HyuJ6ohbFaxmRXHMZsqWLArnfaurGm1nPqC76rr",
  "key15": "2MKohYfH3vhwJvYdFgGgnc3gDG9pDiqv1zwre8vfo7xx3GhNC6hrTjTodLqrCmF8DJxfVQ6mbq9B78opv1FUV7yH",
  "key16": "ZroHZMEcUZbZ3QzpXXhTCunCxumRJ2gTJtobHHYMZPXc7vz6tFPrJyUSXNvU1CME8L6a5E9Qe2A3PPogaiAU971",
  "key17": "d6HcCm55EvvPmJjeNevquB3xmhcnwRvR5fXdTTW4hh5N6arDqgLoHk2kMHA3A7pDwWQX1uzG4DLCuojNmrLcyYY",
  "key18": "5GLLtuA7VdSuvFcKJ511ZSwGw8afnWW1rS3uYaQ4vQ8dMp3CmxhuNiwJa8nnHve8WHdEZLsukyswZrhPnop51ZY",
  "key19": "3A7zh69NHwxu75FL17z4RY8DH156ZqMA1D3Jrq7P8z8juz9cMLTwEui4rngTFk6a68PbjNQNEuSmhGfGGhsgriRP",
  "key20": "5awEEprWrrEpDGHfhoRdHPR7uGqXc3xgEq2qCKBLhB5d9qv5oJQZx2BEDzXrU28CNAouYyRTWY38VmtabayTn6MP",
  "key21": "4kFWfjXJXhUnxfnFwedvdik3JMuJLuCxnycgrrLfmqMhJA6umiQH9kQrpap242EuhjckDTWPsFDNebjMLT1a4Luu",
  "key22": "UZcNLGK2DphXRF8R8FhySXVZHzM1ecGddBjyHMnqLBwo9MveCvT5vwPdC8Y2sey1ZRBGvQcsRcCXfWxVnGmsyv8",
  "key23": "tWeFjF1eZ4KUU62w8bciQW1bNRcwQRjDciGhadUmJmnhZ4vX8R5UTDdqbKGn8kPBZ2kVj9gpioefNMdGbYp17Vn",
  "key24": "5rEQZyQL8uxtG8vprT56Z461a2RZAfAC7mRxbkEzY5TsGPAx1oZwAwjkhb9NbZzUVdjkCFhYtwy1hAoYAN9CKwdY",
  "key25": "4QirCY5eJ4ymsvARG1QyvuKttAmjA7pcdgvDr3Ga4HomPXj1nQHwSE91fqkmcCCYkyZeFsoevcSzUbLSxwxRgqA3",
  "key26": "4nDr8xEskcEDmsyC8wAKSwWahp7XMTnJTXXSjb9HKzYcBB2Ad6AFd8AHbrUDo9WGaZ3tg9d8D9M7wdPxpeQLWURF",
  "key27": "qUhdGyaWvNQSyBVCQoLg7C1B3njKqvo8BRt1aHTwBfTVdztf9bmDJ6ZD75FuHj46TDujsLpY1rqvZjqiNcQDWHA",
  "key28": "23iLTfdZiBh7x3v93u9mk7bb4N6fe9fXjUJntyJkqot7RCE6b9bH86vkcrKqWYuTaUfoX9WaRCmTYv9rKFTfkuVm",
  "key29": "2j4pRGsAXxuk9qwq8qAsAQC4gzftxPQgZXMZh5Z6G57hHA32VASWVX6nSVxU6bCsbtkrt41P6Tp8dYgAcRSHoxqF",
  "key30": "3PQne7RjYNfGwoPvrUMo1JiCsXu47EUCbZiQ8K8jNHMK3drLzMZWNfTtYA58FnEy9Wmzz8Z9ZefQPf8Xk7AbBzJ",
  "key31": "4fYk2b3TtKq38u4qRVMCs9EuZgKEHaXPVaxyGGnMW2ryL5yJTtfFamhCmoPN9DAPyhUsW3s3x6Nz2HEgJHb1vVss",
  "key32": "4Snbjn6dHHXLW4J1q3rbPKWTEwSXWo59rRk3VDcqAVh7PV8t24ivo6GKZDaEcQ7a76Fm7E7zYgcpAyEghrABqDo3"
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
