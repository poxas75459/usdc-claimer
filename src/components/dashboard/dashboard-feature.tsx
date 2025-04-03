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
    "5M4KXL7rQD8SvyKoxPpEQEPzQzqBJC4auYtSfuSRji8bmt6bppLxynj2MFBUpmnZDHmV972JweP91uLkogT1cQvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41JQQxbkUP6rD5gfc2RdFh3F5y5os1V67bzNtvhQ8TVLzqz2ZntV7yAy8U3BDGfyjFrSRTWKYW3ShgPCFLsKpeAr",
  "key1": "3rT8t4b5dHLM8gtYcAj6v9PhiWeYZ5ydSHGiNvzeyTWnQ9bpR9h7upFWGDHwytXZS1HLpFTabNA4HzSExgD9pEoB",
  "key2": "5SnTgueumM1aCw9gPpkfx9fzMyzdviWVxUnMtBPUFZbyNrB2BK6nfD5gQADV77gtY9Z6LZvwFyWbuMxUtzoVtgEy",
  "key3": "5JYWUbfFiioTSXDYT2Z9b9PPu4WQHGNkYuEEg2FkCKw7HHXhn7etnUaFrE5ZxpfPc4uLt1uQTV1KZbPbwAeeFvGy",
  "key4": "3EMSq6ouZq4bomGGy1VsjfixEeA6sNWF9yzCHyQ64cTJxtvDBSDF1KJqC6GEr1R3q2RpPeC4CtvuJqVcKpRcD1MD",
  "key5": "2LqTbcmMXoR6iEMQm7FAZJPd9uoM7zYSpp8f1iF62h3nAYtitUzfkaDLoHWsyCX3LF58wdfdQLycWefg7yKhoRAf",
  "key6": "3CYyD8pLBjP4GKxsiqrm7pXsbpTvaSLTrKPGSfAqmzqz7baGFN2KS8UJmMCiiGRuZDbFoHhAFXeCgodWjU9SN6Bp",
  "key7": "3DRUwUjxVDYqLC1sMrzB532qg1GVTRw3w9k8dSNC3tk5hg3sqctriLJ7CccaeVp6wT8HKnhfmkGSwepbuQcf9tBC",
  "key8": "4vi66GGpEfg84S2o7mL1Atk1RbUfLRJLyF5e6p7rEfrxn1VzLwH7mQnx9fbQ36TVUssh3dCpb9hjDuNBozTQRDDV",
  "key9": "3aJwfkSqMmPXtev7yV2wCr9SffwzULgHz6BK89Uh3RmCS7rjDjNDFM6zEYZYn13rqqeWJurD8tvZgZac9FPs7TwL",
  "key10": "5eTVTMuunMsMbP38Y6yySvMHKz4cnhPGPP1jR2BJ6iJ6yF6Tg5LATVea4kNeDi2ytqUwdVzBRDWv986E95gND9gu",
  "key11": "4nz2bfuc9bYzL3sYhPk9ypRu5iLauykkcFMhVDfSsn3Jvk74pgNEFhzcgPHw7aapmnJ6cek35fhhcUc6SzS8ASVE",
  "key12": "5tMDfzdY6PJXgBHmKeUUJzYKL5ACdPtv5LGqUDUh3C5BQzdM7mxVVBwaNY1ruHNQGHqn3rYWJcD2P67XhR1AwJaT",
  "key13": "56h1WfD3Biy4GJZHEwo7hQJ5QMSW57nN7D5RXfyVM59TiFJ5i5Fnxyy4Lt5MenE3CrsCKij1nJ4xPQc6z79AvAL8",
  "key14": "2nDv8RpXxgmg1un1U8gppNBhWvVVsVcyrLLHqRamDhbhxNXC3kzhaMYkbsxUd8WT2DxbxMUHb5RaEaNpqMLT4PZg",
  "key15": "5zQFXWWC5ebKmYJ6cLjxPs9RgPn8A51iRp5sc66Pj5obBzb3wyGuyaxi1zpuFCw3CT6DLnUkJgkQkE9VHGyMRKjr",
  "key16": "25jqrcB3dYqPechVcMzzLwJPoFgyCtMMXWBu99hSXBvXyUjqen6VSQgpfcAiXF4wevBaCzdo7suanpXiMwgGqxvR",
  "key17": "WPLdMRrmNMCqyvPfZCjkCAfkNLN4m9cpUyfmQqVeURatLz9bqaLVQQvn6awf7dUfbsNRJNygsnBsGxyCbMJj6a7",
  "key18": "3eFZc9WqHp4aV3YhcCQYu6HjTFziVS1SMD9LmVtWSuQbFVBeayFDqswfcPG3vCyPBbwBZtkoJLHG8S2U5iFQsSWa",
  "key19": "3Sef6HkYjFTFZa5YB5ZNeUk4Kc56GNZq1EUTLE27eGLPC2B3tM2Q3U1yAMLCXNb2qC8aFsuPSvr7wWEJaxmCW5Gm",
  "key20": "2aSMbSMy2FFnUeoSsjQWJf3LsEjc1qN1YPuBrUM748SiM7bwrasLrbFxpBkPpR8Wd8mXkiGBNi2g36b8UpWj5wMP",
  "key21": "4SihyuN36KjQAqrPpTwWpX8cXtBzpNCfuF2AfU6tzSbsGKVBYq2aauZfPp3dbVC51hrzyYFxLiiZGf9t7SWFHffc",
  "key22": "64KC6QvwN5Zu3ymQLDLkCrn3ADJwc3pujwrrmPuZZyc6V31oTkggZJLCLECoDsV7BLjbMDTxt6Ys6hzTCtRa85fC",
  "key23": "5GEAzy6beaTd4sN3BdwzkPXrZcchQyK9VAjMoCP9a21nbJP7u3AgDofXgcZnKQ2NvJ37vV2dx3R98FK2e29gDQSD",
  "key24": "2w2X2fb5rdQYZMUiwGn3TXhaiVZZN9QHSpqbk89Y7gySrXpQTTRd2MhNHcJJnSQqTZwFRf3Fdv1ZnCVNECZpuJSa",
  "key25": "61sEqEqZMYrjb8ifn8rW6Q1gsRBBSj4N2i1EwnZ1xaq8G9njRVPmx3YBwiM8PFdNtmNhJ76UaEWDqbd8kWReatpx",
  "key26": "aLNT94Afe9fxikakrXiLPXA2tdbk3R5sQeaVZEbGeG2xJdZMtGwXSV7ceW6XQSzn4MLQXFkmXYRYTUYgw7qGncT",
  "key27": "5JS19rHotZPm9JAT6ftzrxywDoPXv9cskTyLSDRx1Vekm2ySJL2J6T6ZH5Dp9yi1Qaa5SEGccDDYyvN73ivduiw8",
  "key28": "nru8jkUA7j3NNECVw6pdaTnVtQ9Y4JWSAw1iyz38wZKXe6rWM7AKYCwJ71FrBCEM74Qkw77mEqwY75Y9xTuHCct",
  "key29": "3LHTBjvutXAaFAhB96aSLbr395R1pcVkiBMDXVfJ9Rfxi3CvGj5h5rDLWxtXg6izn6c7hc8jK7caPbSax4RTYSAC",
  "key30": "5PnszHsyhFctUaGavKGhoHjhcrNFGSAc1jKSR5rvyi4FDJ6pwLWGQYnDwQqo5cozntRzoqPk15TXEKdDRLiXTbtv",
  "key31": "4Cs8rcecHLJPNvVSmvnJPQ5L2MpHigcrkvkpRy8nrNcyoRr5sLrhgfZgemNdvjiwH1qQkBbQs2YYV5fn5J9cqtUw",
  "key32": "5imBNzR8fveEruHhU1KtXYtaVCFGDuPU4SNGaWx7eehF34hSRAGKz8Dfw8szJRM6NFkJqYsv2U4yixnMbcDjzvgm",
  "key33": "58xTZCRwB3ui9bxvteEUVSmTDSrcLk7otMCbkvPHu5s9yBF6CGokcJf7YWYvL8ckpZs4RRem3iB82zPepuJYHj9d",
  "key34": "b8RYks8aecGY48V3cmmWRETAwRKzE6osjoJkFHXfjBkyiGVCytXZZxdg1nfBFV7bovwhfdsPWhaWeQwLgHcTAK7",
  "key35": "ufSsiVRvn6C923fJsxg5CYGWnwqHrbEKSqL1ZyB6XctqxEhZC5yYfhD2nnUnuSfTND1upzMt4X8CUMRRvpTNsC2",
  "key36": "647ecRVp2ijHS9QyVL8V5T4r7UU6Ed5vR3SSaBMHFAb6TtnTryiZ1TLao13nGw4KykJMjUnxxpqH4wEz3EMNGrs4",
  "key37": "knZarChCkvXsZkzAXyAWn4wNB5iKGPhtfVabo44EcXe4e7SbBmB5aaEhVQTTqBzfAN4ZJPpLiwdLJX6sufKhho9",
  "key38": "5KUYmKkA16yy31z9Nam4AHgiYYwPW7Q8QsoZ2rhuEuKgQn4kVWC1YbCQ3X9APhpvkot76r1Ar86d6NzLUDUsLedj",
  "key39": "GUSNQNKZg7rtQfCC35tqotUTW8fGQmSH8TMjGJM3txFN6iMB5A7a1swDVHk1EaP2rSFhD5Te7b2CejeMFwS3onZ",
  "key40": "2oxGvJmHqhYvDcdkVwWjGA52wsvMEQhoLskFUmkX6JCKLCJ5iBZd1wx3dkP6sMmFsRCnnrRf4CewYP376yDtRD7r",
  "key41": "5pR1xfumgjYM2L2ueTqXM5n7Wr8Nim4hh1W5p2xwGw6CCQyoevXiUqRwWHoYTK29tsoCeptPZvGmyCCyuUb6qiwA",
  "key42": "3xFVab8qopr2CTT3FxCvLWRuyE1KohKUQsPHVBYwFf5PHEhKsBezzNpQkHgqeoBoundzddhsiW7h3hQzvFSeTQ6u",
  "key43": "396xPYCiDKQkZF9o517PRUtMKkE7eysHPARYWra7WGCzJ3UrTZTujwaom49zNQrK8QdAKXoE4Jvnz7UpMVJRmYnK",
  "key44": "3ZFBkddtuoGRk73wJBJEK4GUvC4zY3DYsDLn2JtLLeHf5ckzx153kUx91XU2zmyrP6qQToi583CE7GqKTsozJgLX",
  "key45": "3fV7PhwpoiMyLf5Tfhn7nyaKdRY6RVY3p1hrihYoGMaegLyZmWtaK435XQcyVJGFWRtMUPeea44QPcw1veVWkMEp",
  "key46": "4VdRCGhZcDKAuprTRLmDfG6WxxMPoPBCZhG3CSFsKhWSqjMPZYbwDtYDLHiLXzxQp27ZpVazEQLCUvahmygu1oSP",
  "key47": "4rCeNLsGvB4uwBrUwhq4RgVdkjn6hKnjjwjNnvPYEwCqTv4RhAKmoSJrAFNGhT5TTwZKFNJsjriK1Lvi4uC3x6cF"
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
