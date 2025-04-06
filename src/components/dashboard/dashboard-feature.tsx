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
    "5dECu4S7DcyV3ciAYdrVMkUbqtgTrXGgdErqzXzkbNoNEmguiSZGpQYicv8X7mfCNbX9Ma53rWKzw3gm8Y7R3vHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fsxqantBKV6MBz8htYsFY8L93hV8U2ebb6te4vHF4V2Jo85Yku1jDAQP943ok5YRsZ4gY8oP3wHgCpWnS6JyJmt",
  "key1": "5ZvD7Yhq7HjF55ewtygU3rHqrvMjzeAk16dnj6sEsYhPkv8vdXtj8dVRBMvCpVf7aLZY57p1vSsw4RMNgyE6Jsu1",
  "key2": "3KoxEdJPepbCqFKu6dF5EPVP3wB5r9GqizQxJKCt43extuSiEi3azySUZoFf929vcigxp7Wu9qUswrs9A9veGhrY",
  "key3": "4eQ3bSfP2h8Wj2USbye73YSo2DJdVf9FaYzbtZGxWSNpc58STsjxMEDaqUUn4T786DL91iX2kKBMqRSedan2Vbqy",
  "key4": "RVfiRiRMqBEd8NG3Uua1sWg2F3nMjMdxogt1MTE7CHJkuAgCigbVUHoThUdmarz7Mk3AqqLYPBVjWTzUanCQPVP",
  "key5": "s63j84hTaWZGhcUSKSzgmxPpYYKJfCduR8Jw87Y5cVsyrPYzQd7WARrdTQH8Sw1oxFyWNE6h1CV1U8kJmhagBAE",
  "key6": "58CpPMeuA5VnLvmh8Q1RpCr3dFPHTnNqdB7VfF3JMNrpxaXmbHoDkobmNmTE54ZdSLUK8usn6bBdUBUaYmAV78yC",
  "key7": "1q5satbt9aA4g7G7Mh22G6NXFnZQ9G9wwYicpEVddGgQ4TwbYzFL6MnwdzRPPGdeKhJDCx4hSikkA4WWkJzgaLz",
  "key8": "5Cw6e5oZ9AKS3byS2zyXm5TDXE8dFBaMPJDz77xn3jJbZuvSgAovWS7X5AQQ2HRcFEyS4TvFJ88KZtC9tvvDUmZW",
  "key9": "2nnDrU6WL5NMTX9yPLVqD5myYgSvx8LrmAunScD3ycCXqYzrJvmF4hwcDQitvczvwkkbjGU8CTgCrecjaZJ4d2c7",
  "key10": "93KpAkgFmFCsX8iJdy2JKzVdt3DqrZmVC9fzHq6U1ZTpTpspwzvaLKT6vVnTZMdnpE68sEC8LUM7LGWWYDTebMv",
  "key11": "2Qs7UctabmaNZoZ7eiCKsD1PPC7vm4N68ShBJx1sp5UVH3XGmSikFhR9NWppKoUTY3QrHWaw4ecYfYVCPBkQ1bM5",
  "key12": "C5CKwKjdwutTn5nasqpw4APso8FMRxNM4LEapSRU2oTxbDzmXTHYakrTXhWbexb1Cs2pGUNA4UZNsyq2E4FPs9R",
  "key13": "5FrLPkVLvhGVugUbTCxqbnaVxtqmCmspz9eTTmUT7beZpFLpAE3XnGLxYFRqdfqWz2BfwAhza9iEs84PvBT7V1hA",
  "key14": "3rfwJUuiRtmx4WEYjndrExjByR2BzHhvYqabpSNWgU99y8mwzpVe6RBFca2FiDJXqdfH8MBhUT1DE8ppFV88xYxX",
  "key15": "wMwytvK83d8kMHqjSQLxZa4w9Wqu4b4sBqbdJJq2rC91DjjzGv5a78WLJbweF2ajS4tYsobArZrcpta5A31o6B5",
  "key16": "2dFEfj4258Nup3u7nYbCjfwnETzwD9nRN4UyYdz4Uf4nuPWioXu4bLcW5Y89b3FuLea5GA7JUEzTRrAkBLpjn2fx",
  "key17": "Mrew4EPVpA121Mm51X8wd3tQ3SnypBRX6oaHXvQFUeFQQvu6QabDKZBHRq9tw2RrntnYiEi57vFyPrVAJ8f8VhP",
  "key18": "CUTVpQRtzAZBv5ECvxufh94QvYUzK5GCvknhG5pK5zRNJSAR3mCnMgEykDZ1CSMDtYax2V84mFfgB9REqcyeTrJ",
  "key19": "2HmjkioTmeTNdrAsZBbVE8UsAwaaqPVa4vWmQqxXwNrGR5dFp6pt7zLQpRohYkb3XkcDXJSCdun6M1yde1pPHKLE",
  "key20": "EDRCbXWRJAJY1ERqDm924rUKfKwU6Cd4sGGpFSwjCLfyfyeLj1CseSt3cKPPLzJn6JAGGc37Qn9QvwscMPjwaqh",
  "key21": "XVoDj59MzszicaYVvE1w6gwR6pobRssA5oPGPqN4TvQXYLEjAgAkYejbC6HHU6BgoL1JEc2n7GAnG1MYkqWgh42",
  "key22": "chHsGUEeWotR8NP2dM1H6NBG5eBquEvfozYhV5KBhbdqweGXvWinNUNUixRxbQkuJznD3E9JJEnrr38VB3SttDE",
  "key23": "3fAGdcaCT1UWBysPaBxJJERANQHqrFLuep2Bf1F6z4UBygVp6xnU5arQ4r5xbf812UA67f4wMZ1xFzX98Dtqrf7T",
  "key24": "2CBJq5ynrm9hVJpPLjZiuXCoTstXgndkQ9aP59LZfULWwuasHjZAxC4Xqa9or1BRM14snYXirfB8nDEiFGbVsNw7",
  "key25": "raGhtBcqHeyhQiK4k7b8au2TDkGPvD45zmtd2Fp5U2tMQ8MacT57a2KyvkqDkoBbdk4rtJcJLcy4ZSFv7rwcy19",
  "key26": "nLWAvAm1RsLurVbHNLckbvAg3BFPBY6ZtgPM4ko7TVDcqXAcpPh3Y9KgX49ET32BZQzuDZx7YezSTEWYFnaD4qT",
  "key27": "5cCjeovUzeVkdVX2Fy4ehsdmBrcnCoHL6eFpySiKVvFMZz3iuxfm89qADLFkVuZZJqWfqQyzDtFBWGKxzmG5s36h",
  "key28": "2n2RMT5gnVpeMU4pB5sHX7AwVYYaLHiePiNmjSZyUUhRr8Kn3yXpqwcumVCV55eFBmQCDPhnTb6EaaFbYcQpyse8"
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
