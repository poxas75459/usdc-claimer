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
    "4fvpeeamrGmcNcWmFhYr1Hc9ux5fbzbNLavE8XPr2DZoBhTfqySamT4L4Vz3oZ1efW3TUQBJbRWn2aNanuBJxEsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "677mdqRPCAq47drThss4Ykoi5bWadXf8FBnQXP2JL6Ld28cBb7L5nzL83Str2SL31AyZaDK4kNsWEaW3TfBryBE1",
  "key1": "nEvQn9h8NbqS55QDDGpU85aNP5QdoSRJm1kTUDDvQD8W4vxd2jLmXmPT42j5hQSLV2fTWuyBWLLsto2wkV6BKNm",
  "key2": "WY78Bas6awwrbfJ37ycyF9ps9ZDdF4vEMguZB63oRC8WWb2eoJcaSq96YwmxktxXcNgGvsKHSrxfkoxDATYLRH6",
  "key3": "3EiSqDEMC3cu2go6VMa7xPGEqjQj6pSpFsvGh2R4BxiQd9ysZa1Vx2Ke7y2RDD13tkmKoh4ppwuWptHcdyojXJ92",
  "key4": "3z6nRSZT7kpLNRMX2t9UEQ7j3kSRr2aHVk8o23peRTR2fNo7t1JGbKSskdUGBSg6QYwZuMvUTXdczUoXS3DJvRcP",
  "key5": "2fwmjz9aceUeDaHQtbPHk8xNErxhYbfsiNGmsfVvZYjEteH4qYiu6fqNsH1aPupsktGsdewEA8YN9YznKMqtVwJu",
  "key6": "5H9cANN42hkYQPCDg6BSXabFWgKjvL2ykcQyPtTSJivx4fJWjF9ErwwZdL18PrxUtdHEBSb96XtzG35nhPLbY9L1",
  "key7": "QYYnZPavdoLRSZWbPLZWTB9skWTP1WYNA9MVZskK7hMpbPuCbGiaPh7tWhmAT7xzYikCvfWbr9zTo6XXd8wP9z5",
  "key8": "xhGuwzgoEPa89nEHHux41ET4MYuaWThvrfhrqJ3ffZdatfyk6t5PMkeqwEH4RkJkHpRFxqZv9QPd1tohUANmKdY",
  "key9": "39k3NHP5Ck1y4CMtpFyFHBwXkD6penQ8yoHRrKCaXaRo39Ht2Yn8yWWMqgejTwbvokrTjiMvGzXpQKdDzmLDTGe9",
  "key10": "2nf4Mh7fLYnJJq8XrY5w2fkemKmTMQSfwtjE86J6VYdVmY5Cn47cSjqRapGH9xp8mPHtjVjcEaEAQrpBLiwMPQCc",
  "key11": "2YiMFDXACHuXqxN8bJ6CC2gUD9xEeCbbKjRuffr6D4W2cShoc14n7UuiPYQnDwnBLqQaNtDaMoV3fSDTUrrvgnAJ",
  "key12": "4FRUAT93VnTHXpZUsBZpFWShA2AkhqBM2sUeDxLwr5n5Y28w9SgJJEMGhcbPd9h5wWFhYF1Hf43MJsEJTw7sNNdu",
  "key13": "5fhAHh9TwHgWHcGFQxABXBD99p318vfswdCCXqQMUYeqgTRxMPms61wEPu6CXRBzDmkN279su1U8NXsQYEYPWcs",
  "key14": "5fN1ak6BwdTPXFxtxDWSCn4JQ1yFNzQTzWBXErWjrSse8qqkNB4hRT1WkSZ5Eb7MixKDPF45GWfg5PZJH9vNkZQG",
  "key15": "3AN8wf6zLdS18x4wmWBr13KreF9rQVLZ6F3uYscZkUqfX1xqS6e5tCRK2dE78aJZSnqQJUTPcY6ZKjMzwMRiAE6W",
  "key16": "3rCVeVkuYCbRxDrs6QZA6eqBzAU58Lzzp6thU6mLJd8mUAYztHnj7bkVqUtoVVkexeoB4BAkHgtGaakAHvPWog1q",
  "key17": "2utMqToxRxGUdRwinCBifEToagSJ1SFaerNmPkK2kLGAofFQ2BxquNGakWgwYMWmMVrxbXRpHcbdpHJ3A63HmKNH",
  "key18": "3oT2Kd28VTz7QYn31QUyuyTXo9UFcpZrNBV3wWKMoxbtk89t837B26j8egGAeaUSK7FDroXUiNghwP53QsKFVumf",
  "key19": "3YkbpTnHYyiR4URLztfHL6NmEWdahK8TQwghinsjWEFe4ukcUxANVkTxcmZHkyYnQU9eWRRokRGhNhs3NrogKcgB",
  "key20": "NR3RcLVNWzNGH7LN5ikxTwB1mkNFxUcktSyk6cc2LkEACC3XXnxrtCwVpfrfA8rbjK1y9iWLf3WhZN58b4g3LkH",
  "key21": "4FLsS5KTJSPxKETU36k4u11RYpDUFMeGVnjZqQe4tD9FE9qnsmS8SGvSsCT9Z8mGGXG6iJuk2zUJJmG78TGvXnKA",
  "key22": "4G22UGik8qdzMx2RH1Y9G7K95zFHNtL7goZckd2YRWM1k68uyT9kQJALqeUuCZRDmckaXoVKQ4igVkiAivWPJmZz",
  "key23": "5CFiG6y4QC1oYHnRv3ZBsuKKRdEJyL5irf6AszAgz8RzaDtJVR2epSNzon89HmSaiK3Po8AEbtfJRuwFoCM9dC53",
  "key24": "3H4WLqZJG24PHG6713UKpawKR2GocD8oqQCUayM3iMJMS89BQrBKzaaLKUgh5K9rPdJTyKvLr6e9RdCimfVDmSpk",
  "key25": "B6HhMnvpZhL57YeVGvLcbYyTEzoVzR9PrTaFwAwU3HVWdpQcMX1kPYpNzKGnbZ4BYhn6PRiCVvHqyWEbQS2b39o",
  "key26": "3CfYmE8xUR6g4hsxqxukjhBPqtg6scqcH1Su61Ztw5S1nbo23JfDfUYVzmgNkaGbDFzRMkrcCFUisyKw5FJLUFFX",
  "key27": "5Q2acXKjT98XFxQ4eRc896JKrmLTtqREVqBPxfrLbDubkUCwVwZ1hHcTArchuLub9KP3P5pUiNNjJ8SStF4UTrKC",
  "key28": "2XP8uS11a8mhcW6yzLGJSQ55XHekAQ37n9xHESif6XKf8u3w2Fy2A98KxVddFVkHcfJqEoMbLx5xm4p1ozriyDvs",
  "key29": "r2DaL8HNtWK2bVzrtzTWBBmTQNxfshXHfJbaVC4UZxc81PUsMMFPbvTF8Jv3R2zCP5MXQCYby6aiji2AtsfBs8e",
  "key30": "RBNHSJ7ux4X48cAt9bUzqKTgui447kNFSQEEfYUWdM9fsY3M4jG2rjGaizjxtZoZsfUC6X8NBZfxuoKQ4mGtq7c",
  "key31": "YrnXMv5SvPZnE3LJtr27nUJGzEJKpghcwuUBTTzhAFsTzQkbdNmDqadPNv7oB4jPqqLs6dF37GpX7E4pby6q28v",
  "key32": "2Va315yFvbwHDZvApSmMzr4amCNnGGVJKpHnUSx6zfFiXptLxXduecKN3fXJsSUjhA6AEc9eCRzf4cpopzkrvNAU",
  "key33": "5rtFiy7XVVRJsQjrL9iVQVcRDx69ZJc1KoNm8x4d46FGZ1Dg87KE33bBnFgTRG5e9f2sW4gRss5PU44PknrrKxUq",
  "key34": "2o4jhBk2YtEtE7rvQYD8DqY3gR4TNmn61usYo821yC42b36ztDA3rJtwcLtzSKEjWfZKrAS7uGRTLq4DuyF8R5U2"
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
