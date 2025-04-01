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
    "P6bURBwTekuV7tuhtTA5FYykhN6GeCTagWxiQKgNdNY3uNW8t9X635VKNcnKiFhMTAXmc3K9VXp66yQ1vt4QDV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YJLRZBDYFMK4rdc6qZGySmeWetJg2uMrt9Mw7dAoJotsTjNDoMJJ7envKuKKrbbvNbAEtTqXMKNtc3fXNhDFwvo",
  "key1": "65Cqf9okwz72GqGZ8D7b1vS6b7DiWiiUUA8k8zhPZfih376MHQexJP7CvmuKRLEpwwwqjvYriqSbJvkZZpHry2Eb",
  "key2": "49m4Ep2M3jKuc9mqQMayssByFJa5pA7n1eZ49ZvGC6qSiJdwcc8hy5Ty1xohCioV7CVqo68Q41NFpHJbuPEC22iD",
  "key3": "2odMcfanay3MeC4yF5dhoUqGtAeRvuqybLsvsmBFSAHMkcpZ8Bxt1mN4BQTCddyff7mUpKBxr7UEFpKu9NnV7aJy",
  "key4": "3v25M7pmP2ZvmPqXbSoZ1PgJSYWUTNPC8QR2dD4pUDsbH5NjSDSME1nK2GVoYsQv4vDgUSttZnDRRv7GNX2Dxxv4",
  "key5": "2FjN6rtkF4kFNNnD41aLyBokP7pzeJihEUs1WKmt4sWFJ86zohi6ntNtquDFvSFEkaVdFv36muCKBH2yokmKbkGv",
  "key6": "2RWTfVvJXPbvBN9C1XndpkUuQDn7ExxgUtwGqU6r57KkSexAf7UeCwmCt6vtbauE2VkEN4iXJ9ih5XDv3izoEdML",
  "key7": "2oJzqtGfxJ7wVp2JBHKyzVr7p3cSFQQQwUfhxfxi5n5nfSH7U12Qyj438ep51HbzE5Z1T8KUZvNiNuaX9D4NvsDJ",
  "key8": "2V28JJcTFmGartWKMPZo4o6CFZ7qJLcFkB4bQF7YVg55Yt3QyAqpLJgTCQrE2UMK4X8ojKF5pubrDVn1CxfNmPaY",
  "key9": "2Mfj96eezH3ULyDhrCjqhLQdqs9LdjL7USqQ8rmqyKa8gv95MMV3qShuB9kteN7fmGrawaJrpkT2rMd69ox1ai7v",
  "key10": "3mSHdRYJ8R9vm5CTAAp2XnsQVEbGDrsMGo5u39PXXbxbpHrv5xkeUAntBKpQRiAG1BQnpwgvGJuUCaTGhoeS3Bg1",
  "key11": "4Y3x46pxDgS8MfLpVTSiyj4WsRo7gxe8aPHeYdizyHkv7aqutx7nE8Z6FXfVDPK9deH3tLPTzeeMWbUcgZ7aGFxX",
  "key12": "5p9vdJQZU5ukd24CK7yc6DARTPTqLJbhjRsbtanPA7P6TsyzXhv2C3JG1QqhBR3Zmpovwhbp6grvSJjE2HRpaHX3",
  "key13": "5SKAvtbi2KSDjzxGS755ao2SqNB4dqWLgtaHpAmJPxXw5wecacreVTTGEwBZPSRBL5t2SvnGqv4WPRBGcxkYqhEz",
  "key14": "ss8p82J1WzDNL7iLPWgHdxkFKPf27t4Rh5XsWMsVkHjADKXJtkqS5BoLyesdsYxmqGxcm3ZE11u1Jb5DzuCr4at",
  "key15": "45k4cmNoVt34wacMpiumJf2RVpSBqsb9hZYyEJK9jAgQbYzGhHaEvB8wLoazznkXX786gigufmSqDk2CyJW1oZ1a",
  "key16": "3X6Unt5ATWvkvXFfngua2ZHp7uyc9Mr3oxAU2oCD5sW2eF3bvEcWVSPBjDzvW87jP4zvPrmVApJFtG2ep9WHpjkT",
  "key17": "3LT3qLHqLa5w7yzrcvpHinMLbVajABAc2gGbLwezybQ7eW9CDsGFof6vJJv8kN9NmnnXMnn7R7f2bNyqm5JpPuct",
  "key18": "5pU5C2d9VZphbR73t1WxVVfLqk8xTeS7TUCi8G2P8xBvhMWhm4GHZgw3cB9HPquHzAoFMz1Kx1FiojbUjS2NVcrz",
  "key19": "64VLP8QDU4UsaDoBWuG8wpFm5MeUHmNEgeCviMdEQ268Dov8Q15LRXgKRbm8vR12Bb1SHBNf3NyMtJ4cVmnmyN3J",
  "key20": "3UfPkTYeQHt7dCkFZUPpJuQ9dZRLnDh5KYmEnFfjBZS9gAZbvkzP7Kdzq34AFKFLizhZmcfEx1PNxg7tHG9Pkxmt",
  "key21": "2W5vS9mNuwqFxfLMV3KdKqVHjph3d3mSSWyy3htwBaUT3NfSMdbjMrAzvL8XMg8VgeavKsTNYsQD9eXMTeuhKb2f",
  "key22": "5EeYVU2wXwy7PRZW7tMHis7No11Wr8SLPKBCEsDqQWTk4824QWBiDT8St7ooc49JFjb64xVjSjx7XUZnUYrfCGAX",
  "key23": "J11dqjkQueq2DwZuAxzHpLwFoLQ57wRDxkhnC3cefMeVkTLmVBqoknm7eeqxCS3VtLAhudXmYUzLUcypkZi3Mtc",
  "key24": "5raQQKbKrJLPv8XffMdcxN8WBXm2ktoHUq5kD7A7ey6oe8Pe1TMf3RjgdDVhs9M7jby7sCFggpMEG4KwqsjFLHfH",
  "key25": "5pEhN2wLT21ryEB3JEQZyodKzYHbH7xxRq5nKmX3Yq2fRfMtoeQ2nUM3njwbRmb71D2LhRCFZZktrYtj5443BvUL",
  "key26": "DCJhRBHGUroSSEmZdGvA5t3pe5nzKisrGS6yVvEv15d7d2rVVgaRrt4KMN5kgLmzWATHL4s9vGytGuZLtH4WMai",
  "key27": "3iBSpb2nvRFhqrCBauyDxqpj9Rmh71xv1bMKoZaZnX8TSnQUFUfwmrwbmwccqP1U5nqbCPKiYKmKMPEVeGwFwH7M",
  "key28": "2AxUPbLBSgvTTGdLFLZRLCfydbi5Sdj671zna24wmFe4B6X65conFTqERwLK2bPuErpF4GWTww6aGLKs5HtRnyD5",
  "key29": "fsviyJBHhwSb3hjASfQVWiTASTYMEC71FsD2g8KbtTzuMABqUVy3SP9LZirzVjjtqsHSaRhyLM8Ed6tLX8kYarz",
  "key30": "3abEiN1AQZqC9PoUoxhNnCQUtZAbcPKewbigWEzwCM8K4WrJ75yvhEDNivzwMkDtAZbztn14qEt14HqEDTVM4rkA",
  "key31": "5ERiYFvmKGUSHqLo2N37hCUnAWLK9ke5iJ7jbFEZzLpSiwK42RC2nVLz6ywVccytTm6BXbWg7EAMS8DooDQhfcio",
  "key32": "4QobRjdwbHXeiiTDfuTvXiuZek4LPr5shCzLs8EdbGtpKXLPWinEfLvYbxuxJVxZwsZ9FowvzKnzicvES22xuVG3",
  "key33": "62HBcYCcN4BpFasNxCo7NVRo1ecrxcBvkdKyzeWWK1LuGoZa7BAUoaZZSXxGNgrg5PdzuUtbt6jNaxjYvVHyb1Nv"
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
