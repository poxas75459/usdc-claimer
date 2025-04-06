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
    "5erHof2Ja8CLw2RjoJG1PuH9hfSpWbYkYV8dbP3vPkp6Nsvw6RTCM8Le9hJpUsZTcZYqLPGcg1uq16wVrV65YXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gHmAHuwUkrUkXQen1aJrgHuwhw3jYGFFQQrgM6DN1tq76m9v7hspPzdBYsFUDb6a7uMy64zZA1TQhYdDMxgBJW9",
  "key1": "5vxRkS7uQj8Pd4zKh6zgrdWrRm2dnv3S9a2ceQAffvVj6wiRGjahbwNAAvDzr288p1vvs1pcZK5S1KJztKSgz51C",
  "key2": "4WiaXL1mDWTJ4NTPsdT4de3Hx8u6GChMWhaBhpB76ejdG5HNLRYq3vX9Wtt5TPYS9eW1mtCJ8jRhQJrwiUcqnVTX",
  "key3": "22FsRQLprdimHUizhaJgvrfAFdh8oWqFZRG8bLizgsizvv5y2NpHaDiMmpW7VbtRXbBQNvih98VNTatFbNiSm6E4",
  "key4": "2ov5918SLQ524QGRQcHP18U2YyMESUd583AF2jTwxSzZcTba2GwYEaLWq15KdeYSTmDRbswuswyWyN7xkF2KnEFr",
  "key5": "43bAUXeT7JzEer9BWS77d5x339kNZGfDAdTWLHCJ9hjHQKztt1yidVma29xJXSgU6sXG8SPVc7CsXe7wTyb7eZVZ",
  "key6": "JmyWNivE7G6JooaX9jnYinFfzGb4U8Yd2VPkgNP9yYj3fts3jVpeUB6wPTHKDBXTGJBbvXfnm2k1egXqYKBNjXb",
  "key7": "4bBBsxfiZMv7Z36mhN9R2ijaB7k4agQnwYD59Uv8pSF1pFXjVuJuLJbutvmFUUc3BubdfuxZALFXVpUWvgF517VM",
  "key8": "JLYQncN3RZoVEU9Juf183wn93EfnrvevKnV8vhvWA11wsaTZ3toV6aGErkdAmv35QXtP65MHmdG8tuBfSJ68E3t",
  "key9": "mJB5kfF2znXC6SLfH5JLPV2weA1YUx6SbKmxLDChMDHHLmag83GPmDQpjUMv77kT1rNsxCQDLSfsAmJgtd7W8qc",
  "key10": "5fDFUpu9WCKGbf1ZYdLmd7UddNAiS3YB9gVSoKcDb4zWZ6Z4qyPTD2wMBGXGgcyUezb27hvKAS6joXBwQuFN7DNM",
  "key11": "u1bnmJ3CU2xHD4vn9WcVZ5V4iSEa6Ht2dPZzAtjpmikmYmk76HRHHZEcC7Pt5cEZz6aowrqxvpQjEavYAwVfo73",
  "key12": "3HuYoFo1SnNrcrTy3jgDq91FZzyGV8ZRCBmcMfD5T1N9PFK2tYFgZaUHkrT3CouEpcK2zyJdkL5pw2YJWsknoCED",
  "key13": "4ocRGM5vDR89Ee9Y4AN9RUXP4hfCg1jSXsMa63JkxMMexhvZLXJxu2sfGLaHYHbC3Dizp3LrBqKdFrYD9m6yGfjq",
  "key14": "2J8K3TXJME69MHiY9us7QhL9ASC2mjEBqKkbMXjqoMAX99QJp1FypeE9Kew7FoEsNyr7wu81Eh1Jk9HaeXABJHEU",
  "key15": "pGc1sUDLdy77LTtbNPyxxMwYnPrQYqaJ5WZJ9gqoRWqkWGmRihcmyyX8UY2EU4GhyqDJp6D38UtW9BBVYEg8EhW",
  "key16": "3To1Fv1ub3MPs57Mqv4CYCAWVPe1eamPmrBbb4wC4BZrPZ7YmCET5Xke87uymQcPC1Nv8RkmNg2cn8owcn62o2Wb",
  "key17": "2JqooQfomDJgxSnNXkwvPohzzJFxGz6xaKf5Va5LE2nV1hJ6A8kSJJKPxorVz89snyF6NaDm6wXb7cagxpsicir1",
  "key18": "YgnN6AuuvahAvMnDbgbSosZaAfPFM7Jb6mMQPHC3MaM9gPaoA2MPbkLCToExMvktpHQnw7EEc65p42VxURLS5DL",
  "key19": "4dZHuF4Mem8xyUuNumB4dBtN8AkueABDcv5LMbRx9RUy2ynwFsAGfrKHRPEEQHZtByXoLMSUptsnbitRpqmnUhaC",
  "key20": "4LaLnwQcFgjzW1B67bEqRHi8XmFAQRQ4Yk1wPPnYTFESdsUzxxuEBsLvZ19onaFkJaXfeEnJ37aVHRGnRU2R7x8m",
  "key21": "37KdqADUm6kQTvFK6Ayad9QuT3YCxJ9NqiNKdK3Riuo6f1QwmAiXaaqeNf8Zr2FpL81pc5vH51o3VEFUMDhXpCUL",
  "key22": "4n5GJJaW7WFt9bNucszdHpYvvDyALooQNkiXbMCHxkXKdbx8EYj2Uhcqk7rFSkABUvPNZRL7xPNVFX5yGTWBMGhD",
  "key23": "4kP5TWnwee6frQ1EbKvmcGWTtfdo2yr7zrHJuKqupeyPzitFonR4Qq8rQqMqSsrBxrocLVRnJ9U4bSGhhSafEH7v",
  "key24": "3ThpARt6kjYjUmCbwymE5h4UVbYMtCV22SiPQ99y92tzQbFUjkw7RvGWi5VJpBofajmR2H5o493vg81hX7DbUP5T",
  "key25": "4ADQDKQRXugzy7CEwKXEvZCCfM3kLACrPVzumZN2AYhLmGBmyhA82kdb5E1VFMnZ6r4R9iegofaV5i1zkuvL8fGR",
  "key26": "4MKcSDHfUGtXHGuPwykaCUTLYJ9dGQG2WGbMcnr3qHKYmdv15zyzNxkxxHz7parDhcdMhnrJK5pMsYSxQfjY15ek",
  "key27": "2rxWsC5Z1T2j4gaWsEX2BPwiwQcEFS9i2e4wbfSALwANSFMnLxqwUcBFbzrRYsGnf4nKUhtTMw1sxxPddLWebpp5",
  "key28": "3MoApTSUGopFx9mxG2L4mpBvmhhqgDLSef79HdN95bCGbcL5gTa3HHyYRnq2hEg6okbHgqZuRTt3cCgYaiK4Nq8s",
  "key29": "L6DJyJDhQhdXCXBYeMt3JBPzid8iqPhZyMtCqK9Kfa9H3Xbu2w3ENyHvPYNP2YVm76Z5vAeE2p99rvmdFmJKazJ",
  "key30": "3WhGQqi7zZwpdJ8h5AYsFFdoYKiPZEHTUWYajPszoa3z67dxBrQmzrMbxSGB9VxZUQm6cBsxWzRH1T4h9q62BfWc",
  "key31": "XkQMcfPixV1bmfLypMTVWwkW4BkBrLgXk77KCs1vftWZy4SzanoYU5NTomMW9RTJ3ZPuEHXDLNLRMGp9xXUzMQ7",
  "key32": "2jZoWq4jxLHKHoHdqTEdCyrNo7Wqp9wCUZq4Y7ax7otfwpgsmhaZkRWwpWLEJLi7syzHbW7W2QENV8xhrMWGBrAm",
  "key33": "49LqzwGKBXKjmFSSuuyVP9xoKKn3gWLzqg3DuyjkrJVLefZ4MFA2DgPeMMFqD2EMzgGyF9DQhY4VzfwLgu9dRkPJ",
  "key34": "5hvFH5uyWwz68ThXJaHDGuRpcihSKgTETT2HaKqZ6LkRobYQLXEMuK4rJgqMZDM49wiWP6NeTNRDi7NmSDWzjPRY"
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
