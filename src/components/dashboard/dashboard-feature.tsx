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
    "wBYBeBy6D1Q9ra1x58cw2nzL4SKsA5MBZ1D1RbeYyn4nm1fW7U9zQpjEq2Ai14bGQdBvKz2Stxuvkh5Mzrso5j9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vn3L67LqAzZVBbTZLFsffdNrrs7D8Q3W3v9p9anapohWvFUjBEGvSoLE88Dv3gC7ngNLDZfsWcdne6rbrM5ydVE",
  "key1": "21z7nrjV6EUWTiKiVLmhQCEbHd3pEN7mD4AYi2SXGdoYPeDiXBJooabX8JwgC3N3estNjfosrgZRCMVK5kUVTtE1",
  "key2": "3RrghUWgvwJnY5XVCw9ooQhS6RpcxNUTVuSq6U6GjxMXsCYbmKjTEU6b4AGKTQCYjXjDkT47pZ9ch1yEg8bpWQ9F",
  "key3": "37zjv4pmJQjRT8F9b9hLot5qkhPobmPsTSxZNEHLTQkP7FhoPRtEbZXfEiVPV56a6FafbHGYueGdtgU53HHw6HMy",
  "key4": "6v12rVau3YhauW5yLLBBjHCip4TrQfH2zYrYSBoTMufmTj8m8h87376qXJai9hbHY13ww3mYdJYDWqPKHwQSAvy",
  "key5": "3uEQLehTepDxLQuDHpuWx7Hdr1fn5genMYPZV9ozPUmhWyiBhkroxVts12V2CjWWkJDFcdDbXpK6VT7QYCbgeQ93",
  "key6": "5qzq5G98EAyPq8HueF2PQagDfvFfJukXDZREyh8viV6tUUihqeouAZ3Z9kxRtHWw1dd5xz4qnpry5Lijra8zYuiv",
  "key7": "5HKaxN2EG8hRETFhJLNma1y4AucGevu3Szfa27qS2art9QwnG3iqrLnoGagihmSZW1yT76PBMugZsJJ2YqLYpzwq",
  "key8": "5zegLqiwBG9dfB82S3SD7r4WjvsARdVmmWv5qoQqXfAzkJmniozqnEDW4ize24XktkgsxLToDZZxA1UoNRw8Zb1y",
  "key9": "2wsHEbXuD3ZYkPundXnfS2Z9wwTJXNAnVuvxPrYfYDmmB2H5nkXvb3ANMzpL9sMDPM6TrVagz1SEqhAxeEDiLLdQ",
  "key10": "2iZLi97UNqjGRvG8bRyjLYThMdMc3CFCqPQBqyRyccMDYf69w9N1A84xiW145TSa8tL1cWBWz6hdLufWGGCKLdxf",
  "key11": "2yezL6S2c43v3CbzK7w6tn4Pmsre7gCf1NNqYEzyBc1dEYrFL7diZB6ufpUuqbbR4TpYbu4xTjj9MDcyGVVgBnaC",
  "key12": "M8n2XNnKGQmpLzuPdop5WZfpyEvBssuwLDePA1AMbfUXGC2V1PvThYEMSb5kMwZcNKn7XWcbhiuZyS63WCW17jq",
  "key13": "49uC86ASc38zcNGsqvpXRfUDRc8wWUh9Kaw8Ag5EJLChAuiqP4ikzhHFY2jkw9ikemcmbroCzUxaiZFKg9bJ4Hqh",
  "key14": "3jze58YuCmf8q8dwx2PVLCteZvKfPdwtZZz2CWK27vVZhR6zKMooCfcmB88GGi2MmAiYRrT3neSbZ7jW1W8Bv49w",
  "key15": "49D3mPH1TSr9EtMQP2jzPTEDdDUtu6dmcidMSLumPKNbGhrtD4ib743tb5z8f31q5uTnLXvefiHe2T8JQnkpgV7J",
  "key16": "4CZAszprSXY73swr8hdJKgAkU1UBdL5Q159ytqYqw9yiELoMzfbJEpMT5287qWGGr9NzY1QFnyxHpELL6YLpaRvz",
  "key17": "2b7RQRZvMeKib4AtChE8ecSiFgHKrQBZGtmjVgbDMfW4UrHFhg5pW7er9ptjvK5d4RJ329mtxsryTDBiNbTyALdb",
  "key18": "2jqR98u6Q6sSSajEm74SgqhkdfqwFYXBBjBTHqSFLNQxKPGKZFifuFUTvjvNq2538MvaAKW2nP6qpui4rLvFixcb",
  "key19": "4fu97KSCfmmvcADk1FwoDqJJQ7w4xZR1NLvhRfRutGoS8Fouod3JAczDRUqrvnno5JDfZeJBSAfoNFnitn1MaGV1",
  "key20": "2f12BD6FCSpkZdQp57Lh9E1evDhSEmS8aXgeSaRbnwxrGxNMnH5sWcj7guEycYyPcfpkYrFiYKh9Nq1Y6SwF2pSY",
  "key21": "3J1St7anAWupHaEijDaGWgaaZ3gNsT9SEkJm4YkWFpaiHserfnh6PjfkbjaT3d5aKR6yyxgfx3X3UX3rGShTTaUD",
  "key22": "5RKBi87XMjX4sPHibgEWBevbRbVbsnys3UqeVmJzBfLuSqD5icF4WXQ9zCEivmEMBJdCZ8w7JibwhxC726sRfHHa",
  "key23": "k5itRpEY8CkxyEFnBwinLbCwnqfH1h67vCimKHCof9ghmDJEACYBW1m3j2tE9cbk4Q24yaWzdzKpAVxZpdbGEFC",
  "key24": "2sZKEobHC9P9QVBrNjQZdKQwwNZfaJ8HDUPSUbZGCaN96qhBGDVahMeguogoeLGPnGT4TfqQrRGA1qBB3ikFF9zT",
  "key25": "5qrAAehYqghzNE4S8JCrounYmx6H7zKLMYQcv4zQS4i6PGvbyBsh4ez77vF2BaPiR8xf2gVmHVDufpc8krQDSJVc",
  "key26": "5U1onAGSuS5RZUtB8LdPX2EU8dsyiS81x8bDBwpJ7YhGjK2pu5BGyitffLig4EvtNnc6nMg1Sr18FjY1uNJXReuh",
  "key27": "4Ky6VGhqwCyA76ahJ2SYys6LBptfq9mJNxhZfFCatg1KdsstaJm9AuFknxuZQGinR9s7iPHwCdpbFpjGM5G5L5fM",
  "key28": "2SVcp7V4ZXMrxkFw6mJC4KqUK6oo9kJrU3jqzcEoF9cgho5ZJ8m7SmfeW4mZRs3LGrvCo6HynRNpz7Y9kwwLG5f4",
  "key29": "5uQ4ZYHDuEtznmpfnm1CEAYDisaeUbzhg55NzEFgjEorqJYiWoBsgAnS1hmN1RLVosVKMWMCSjDXuRSqhSEgbSjV",
  "key30": "CnijXK4Q3ibojz9WqncC5NjFEFPMkWxAW2EThZA5NnrDR74BDVfa77gtFzLL7Jim6wEpABUNZZpGM1XDRjCmU4m"
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
