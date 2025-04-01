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
    "47TjbicCbArfGU5ycsUWSE5LfEVGYfF4zQqo98Rr9kMAvjbhUTCduUeH8nMqTE49cDcpVSuBimDXJTfTLgW73cY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34wymUSQNgjW8QKu7njq1titj7kE3VD1Nwgzsohn1XAJChgXRFfRXdsrcJ95RxF51t9fWrBkuBQReorsUtD1YyBR",
  "key1": "64sSd5Sxg4pm8rfJqoPb7Q31ASmqyJjpQgq3cEjhdrjaN5dvFTBEc3XywznpreQCM88sj5qdBjcyDpV5gDLY2R7x",
  "key2": "4wm26K51zdd7u2bnAQNHoHxKnRo3XGLTFsR8de61MmcTuSoihgrjFdGgQ6ed6VvR83o5sNiDe7hSSgsrM7cpsiqu",
  "key3": "31qurWPR4rjy5dY5aXfxXLBBiJ4LhaahC5h4F2pew5d2ja3kNrs9JWzawmQtuTE7aq7QVqv73rpFpYwptZRyyMH6",
  "key4": "4oFNkvKvk3T5qYW5ahcjKNLqJidLN5a4e4vo6KeiUgwEjwpeyCf9xdddRHfz66rS97CpYxVHe7vmrufVrDrMjMGT",
  "key5": "doZXgUUMo6xGVqLnYAX8uyMmW7RjjNFj2MqE7LZtEwz1iLFs6cG9F76jZdJ8TAKH4y88VoNraavpaRSdwdSgzVG",
  "key6": "23XgSURzjA3MVYZ3MzeoCWoeewgzBJgzwMAycTuxWauDasahD77ehGELQMGpUrUyurbE89o4uiNqfyi9PQ76Bqbn",
  "key7": "24FH6SPFP9BvSYWTayDjNB6nwamdX4GBSZKZPd6kWHCa7VKLnTE8EtsC48dhkoucZfZcJdHAL5aBNvyJT8ipXuiJ",
  "key8": "2SLpmhrVg1Mq783WGodWh2FQcHn5ZbbhrtNHEa6jwHYCMG6x1KqU4vKaSMvtPUDG7vx7Hkk38rHA6NK38NKXUPzt",
  "key9": "4qJwQJmDh3TQ3gJSnUVr7zCezXYA3pLLR818qnhswipLnQN4ndPzk86kCL7Bwe1DGnNHeDpTsWnjLmvzfvJovqzq",
  "key10": "24e2GrNe2HgRBAn3x39qyiWTkkMmDjf8mQcrpXJJXRYC4EUMuDUdrjEj5kR9LnyaMm6Bca7hyUqxpqjVmqdAU2ei",
  "key11": "4rbVpnAFoHHhokoASTPQY4VstbXtE61peW818nGARzqpLyL6VT8DNP47MnHX5m6D89hdpDRXpHge8EkL955FwGt",
  "key12": "ppvTiLjfBxnrwiqWrP9zZ9iKpEfw6dPTJ6ixXjnDer2g8bZP2vzze7kp7i3SF6KN4ds1Bxinx1n76jqWXnza8an",
  "key13": "4jhAfNX3s5RKPKQ3pJ7hkQE4DyigmidzQnF7idqESFjvH3TkjmnaXLTqHu9S2yKE8cvn7hVnsDywgNdhZKWLycM",
  "key14": "iA9LhujzgyEMhE4rCXiaNVAuZ7vA13WkiPg73GZQAxS8EJ42tjhRDGqU9V9tstN9E4uhJ5pscjahdczKUR5Ry3s",
  "key15": "2a58sxC7mFKWhksdczjrvt9vXEa8upsoGsmCbJjcWiEotcpE3Qg1Br4YDZVKm5p8QwQnuArRC75kD86UeKCTcTmw",
  "key16": "51X1CRTKcjBXC1KE4VHp5d51aDMqZaw82ztL1UupkTa4PMvmJEr8uv4X1nGHW4HorpgfqztvNAjnf1ykCWLPbSAU",
  "key17": "5dFxu32K63B8fXrCxgA95jJvgQazGRhJxuJN1ov2LZauac32RT1f26BpYjbKWn5dg8dNrhahmuWkVPztcRbmujVi",
  "key18": "2X3KybCBjMwTU5DFHQzNMqSscBfajS8EmKK7Dgs1Cypv3i6VmMXUcPuwqxekNtiTh2wHVp7xVsY3ggC4qNL6j1Cv",
  "key19": "5szPB4DR6otcc52BxPp6nHPh8XkYsoNjLJ1Tktc6i9xxsCkRp67iH1QU6cYaqhPy2z7HyBp2wB3pDMMp7Z17d484",
  "key20": "25NRyADxvGfgAyYgG1CboxtViHNnmNJopbqtkDLfg9EJJyGhPaFJccPnMhwwTCs6ijMrHozkBnymztf12APZVS5w",
  "key21": "2R1dTCAEqHjCjy8e2BZafyjoxR2Y3aeTrA38W15biwTi1esFx4ntCsPogFoCknqSFUv9DMph9WJ816uJz13SmaSy",
  "key22": "27WS9kqTsWjetKXuiygfJnaatJhUFkzgUpbS6RqH6dxa6FuFTbT15Ho9BkMz5iLqUv7eoAwofsp13hesBXGqkfEo",
  "key23": "5ScVueL43YVCPGgEhvqHK1CTbXebHod9jvKSEESppqKqvQFx2dMeVH45MmoUwA4y8FTLLGcE51pz7jJ1FEricoJp",
  "key24": "4J9ZKKubN69vM5CnsoEuxrphf4WdrPq45Ja8nFRNwayJECoUy3pPwZb6dZfKug7tUFDjKak7cFqKDeUgjR2LMJ6X",
  "key25": "2n4tXS3VSzojThjZ4eJUdyWhYYVqYSNsiFgZwoC2rpQx77XmFiRYuMAB7t2F5jpQ2VS6pvh4WNJwovvrzKtnRjWc",
  "key26": "2Px5KfGYeoD42SfRk9WhTseeN3jbGBsJdfGC6Y5zBQdy3nunF7MsQQV5pavv9P6fhBHgEmXuY6pm4HHNvmBQEkpA",
  "key27": "2g6oH6SbDnNexbBYhb7GqmzAv4p3N21eN6DZHQaPuWxrb8mU5B2nBzoKqyaMFoCyZrBHJkxoUnaPTeSo8U72kTtK",
  "key28": "4ByTqgyyRbErpg5EF5GmtbKMBVfT2VXVfF3vjgzzBWgZr2rsQgJ5fYMDmtsJs2FyMvDQpfHd1K8iq9SCYw4RuLtS"
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
