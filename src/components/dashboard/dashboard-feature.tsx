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
    "58E9kKwGp8QSGJ7eB4DJZ6Dtr2ow8hHue5qAdenHsxWDnJ3cafFpRqzggyZrduP8oVxG4JSXH9pXfbviNk4TrRn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EwqzPHjgeZFXTRJ25TeEbEqgkv4J1antkDVR3r9SnVZTYFuJpAPMxJ2H9vuDYpbw3QoY2uGAugtPgjnmGetDoAX",
  "key1": "3vk1VNCnJ5yESRoyPNkgojNsRWQyVnbfNkVkToBa8icsYAV8jWQYoDjpNQQb97ajqSvZUNsBkuQBZ11aewKYUxTm",
  "key2": "8BCbfW31H3H79wj5TJAnWATQGq5n1XJjmpjHd97vE7s6GoJMTGWB9pMvG7hMixK9vTaGwimQ1gApWvfgCN6XR95",
  "key3": "52Q3Uxb9twHoGKYRpiZJefBFiuHugzgcC89NTf1smYSMdoJFtztdTMrbdeU2uFnfjFFHLcHqT7DKrJtde1otv7yC",
  "key4": "2LbeNMtL9YdMVj7kdsKyvXmZYifBW1bwogtNMKiYusQFF6ruBcZy6wT6XvxcFT3JzUidKY7uQFAmbs6JRdxgA5We",
  "key5": "2SdxskuAdsGXzRzopPAabv9X9Uan2GixMgHUANUCMCWGabm1ZFyjUss9rwhErfwGwvD7P5uWANyQusGvwWCRukSi",
  "key6": "3Mun3EnhN7MhYDRVQmV3oeY6MkFjJMab2ozG63iQLKSuH58BqqKAsYDzTGYuJwLnwVudKGdRFbr7uSeSxpD7kfVc",
  "key7": "27xP48PsNrKKXUJcXrmXL5i5MkRXTdiFNBX4qrfjTJZ7K8YKDTSXcGdorit9858vmz9b5s5GMcxovu4JjTQgKZEy",
  "key8": "4VoaisjHkemX2hkWYnmnXd1tLpskAv5gooSzSYc8W36Dj5MZuJokbSk7myyqgctYFiYY2ANvsX2tEKNSr8NRd3pe",
  "key9": "5qhN1bjDvtaSYp6Snat57XsAKA39VzuJAiEzZzC17pMY1jKrz6uA8MQooF7ps6QhY2ekKwRDtrnF4ahYWq1RK3D",
  "key10": "4BseKgrgLKYTnLM6AcsGY8rSfzd5S3JutxgCNH85rS1qZpGv37pJMnQBH3YNfyV8rfz9P4ySA2vfLb6CXwikTQB",
  "key11": "2aEPJB4jzETidAdqkKcn8FVu6QiQuCZhAX8QLkqaTNG3RfkwdSUpZ3G83qxSEHgndEg52dCUs9j8fhe7FVthrBwG",
  "key12": "2VRfxuXBxo9Lu4yLYDasSuh6orkmKn7RFmUceDzNNm7wcF8ZKjykj4wBzf5JrW3Wz5fpSg6NeCsaGBzcajywNNzk",
  "key13": "2xgxuiuhq7VrpgJ2FJDB9hjcrbwrbBLRirERdiw6sJUBfMA1CvCs7NQSwpDEECmV6JEB3ESAioKhn7FxhLqmgEmu",
  "key14": "VhHcRaC5Ykkh3VjS9XKUNsb83ooNFBxFDBbGUjePuy5DQiSRpHj2tjfc9TgBqteGeEGFPaversdDrf8n1vMrov7",
  "key15": "3z7gSEDudQrVAcVqo92s8r3AZrhPVRcjgqzX9VHq2EQNVM4GQ4WqwfjjiWayB3WPwkJoBs4qdH9b9n7xzkVspfiD",
  "key16": "32gmzRigwBmbZgAtwU8xihCpEq6Ewf5fmftbYU2d7JmxJXApRjHBZkf9toSw5Aoqz8wKPetTDnRzVw5toayLWQbW",
  "key17": "5agDcrfVcwxEW3B9CmMirUHDqN2wYLXtADDnYZbo6NR1jkfn4CnLq2ZX14uz3TwYNp12WAhPQbtonEL6nEsi7gRC",
  "key18": "23dxZnLwtj5Tr1CqYB9MmoXoacDnmPRCitfZBTJKJzhAQkv3VjKMqtTcXNpEY4g6Zgx7HhXuwn7gUwWYSAHCJPHZ",
  "key19": "5C9X95WCNKAAbybHJaoDAsDcahyVvyUv5x6MGTZjNYvuizyi3fhwq9mR5u2QXvd22x1Y78mZkAt2ZEySLjKziTGx",
  "key20": "4mCVkcEUz1Vm7a8kXyrTweU2s2xYeZcfue9wESKJpDGr5mG74pt5EGVZJZ1pEkP2Bo2iHkecDJLsFRGQs3tLmUWj",
  "key21": "3ZzDChQtoJPkQSHoRvVHjyaw1ezJrr2PC544tqDZ1UFUCYZpxou9xRvf4PGdygfXdyZJCjiGwNiTwCnaSn52U6HR",
  "key22": "4e72X2VCSRXxmh5YQFXSWRXCoTXFY2u8v3YFPnMRpX7L6dR4rspYtM9Urq1pYWSFHojH7eiJFS5PNPMkAx5PmMhn",
  "key23": "41EntUYYZy3ukhCDQzMDVgUyyroCvQPMsupa8FGYbAU2J1y5JsTDRmHiF6iQMkjuV8VcPxg4DsY1Ci6LEbdFn62U",
  "key24": "4HYNnpbS8KxfWDwH8EwsfqY6TM6zwXuCmHa9ushFrntpcbjQGFfLisYQnEMQUAk3u1EFnNJuEkNxnVQFdhGXzQ49",
  "key25": "5g23yRvXTQiQyJrUvdb3LSLr1UB5hoTbKc6pu7pdr6rm948a7i9o1TrdvFNJWsw2kVp97WDV8GQLk73xqmehtz6H",
  "key26": "2dt5mpoWcxX5jgATKeZBcyxcZqscop7BUZEQJ9wkt9tSW9LEBrAGSjjWDRbxEmd3ArqbJQYJChYKyYwUW8QhfmLq",
  "key27": "611bz6HdwWTf4pi4aMfw5yvuVuMyhoszJGzps2N7KJ6CjGca7HVk5n2j81trjDDd14TQaicdYgcQPLYLozG8w9n7",
  "key28": "4umSP3cwrsXK3C7wo8z7gDC3SvoYrocURkv9xK51VfGEY5e8pERVq7cqjWpFnYxzcJQSng2gsNZ1EmfSU7HTwXd6",
  "key29": "3keP8gxsmzZccSgG9Xr1Bp9AtrRTDWF6PgCqLKJCXWKYMMcryd8Vh3eQo6NKRjnN8VcecFx4pVfpMMrtc1uizMvp",
  "key30": "21ZoQPyAw6KgxCiX2mKotYqEg7LDatdbsVCqnco2NsSCkAXdAJThPKChtevYFCr8KzA5EENE8cG2Q1Na6BtZz4UB",
  "key31": "4JNdQSTE5FVJXXbU5Hf2G3p6dM4pvrnbqjPtPkd3C4u5TfZR5aD4P2No6Mmt51XgydZBa6nwmhdJGceowvuHgrS1",
  "key32": "5WYBt8RE8sHYWsvcTuyaVZQHV9FcQuYhttj2PurA1QsjoJV1oNwo1bWvoTBgKg2ZQ2Gx1LxCz7d4ctvj8EPdVGA4",
  "key33": "388jZWC1cUabxnYERumQM1SjJimesaMx4qekXBdcPffozZSF1sCtApqP1MFh2FjdNxyWVCmPUEGMSSGuzB16Qw7t",
  "key34": "4K5xu3TazurPoPm6ddB6wKUXeTPiDmz532SGYtMipgB1rLrczS26ZDpfd5At6J35PWsbHfiPhEN3wiSB9rJfA8fP",
  "key35": "2sU69hkq8uzwA5bD4e7uC2MJ3bbvxKVMtnojGF6ZHPS4h47tF5vfsZpw9YWXD5xmndFJbqNwZRXLccP1zB7za2k",
  "key36": "5b2eVD2CHVWWTPhBTaXW78h3cVpsk2nQWAfmPfYQN7FprqEt6oKi8UFfh6fL8G3BAf8iRaw771F8WWNQuaxFFjBt",
  "key37": "5v7G5d7ge8teRhw1KQmQhUg5i62sPoKTbX26HoYxD65X7taYuHzsLBFtjtHpQ6SAcq5WtAAdR588cJsGRVMzdn2p"
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
