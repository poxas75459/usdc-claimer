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
    "3DuEGnGKL5c5UhTohZSDtqQdHAzxduZPDDVwxj3N7YxCKMFMvbQzD7ipQ3cdUxFXYGnxK8av5eGKqZh2VjKSwpMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jny9F17bVjfaf8G3eVXGhxEE1pqqCdziRibkhafNzQyz32GdW1BADZmRRdKB9bBg3mnurFEArQdK93hKc2LDWXc",
  "key1": "6ZQhgGKkkBVpQJAirufurQEtqtSKrV3qvZL3k1AAjYK4pwZMXCzpTz31wFfN3mitH6n65W3Yqi3eJAfwVWUms2U",
  "key2": "WED2sYbYVGPu2chE923tXBYuv1sGStYYFwqHge3xa24SRBUpC411e9y3CkKHwKXw2W2x8CGhYLfcThHhFRhafUr",
  "key3": "48BWkyeszWUJjHqwqKmNFktoLGMus6p9EMtmicKXsztWXB4YYooXhHkwrewvuiraTetARsVozgrHk2tXtsczDJsx",
  "key4": "3HgapEVyrUXDLBbbf4UmsZHZ5ekrxWw6mQHMbFg6ZZ8GeXCWw4jWveFk3gLL1ihxkRfoZUpF4EPRW5ewNjG8eBw3",
  "key5": "5MeSr8j2A9o6oFWVbYejWqJ8LfMVJkpVKhszBxoPUYiV46s5RQUpjdHmCuq1No9h7iteykdaVEuRdbpdeGvQqc3G",
  "key6": "4DgGQSKgru8GAist59xpFE2Nudp7qZTX8ckf6eTzZ46R7TsoW3QB17DXUfsNCYm68qPjKdjrscHSjqX3PbzMxV8q",
  "key7": "5FPeJdSPeKcusZ5peVWivovL8Q9WsCezHHLmobfwiKzkgSAFnGEYnPercHYZ99Hj1R2oZRxFoViwB172WADaMMjY",
  "key8": "4yYg4UJGAkfP5exEZHJ16BJ551mmrqW7zNZ5mLn57oye5PBdn4bAotcJLjyFgKMVihg9BTJcGvSLKnMHEW659YtJ",
  "key9": "Buj9uRJva5RYzm6ZRvYJKsexCXEfSn8UroCNTev6i8jEMK5vrTvzx9td8dRtnmUFHPREYY8e3Lt7aLSMhHGS7bD",
  "key10": "3dTFpCUuK8C154bjGp5mtd75nJesvjMLKMSiuVt8MNTcCN2jHouk2XS4ojegnFsqFVwM6KzGAAwgrtkynbjT6UDY",
  "key11": "3NYMiHMiRVtfh4oj9zBH8WVym4VwEoEKyrC4LAsd12CnskQME3q6EWkFGLqLs7vHsXnzhX8u3bo3pN4MrKFbLx7e",
  "key12": "2FWBMfpwcaVWJtkCmFmahUrzFHD381RQys4hAxsvY38JvNU2X7soHiuZJfooEM2Lr5keWNWhK3MJJQymGqsLBySC",
  "key13": "2nxdthMdYBjr4WrbF74qfoUpqhf98yvTmBFZ26UqjA592eaSyist8WNK3QkmfPFpbJ3ZndouBVJLXZXbYc94sfuo",
  "key14": "3PGJy2GwdQVLfu9HScxa17XQoR5YRf6y1o3Zdcvov3CNjiLcMbF1z2JCkNvEvSkLnBGLCCBT8Y42f5VQRpBy86fy",
  "key15": "5wYgsRnNPbF6oxcqmkCAfiSXtgKjtmANgiGBCPz625sL2s86yzRjQRTvq26Bwo2ie9oExzsvR7q427zTWjRFUNBH",
  "key16": "2mqkeUkbpxSBPZ7Vj7qcUABrxphF3xCR3tbxH21u1KrvR6LR6Lv8N62wmHUZMSARtj9RNTMniXyaEhdAkiTg6tWY",
  "key17": "5R2AdHRsoYPne6yFnupf8ZAYABeztcULxQfDbBvoLah3JzspMbkkhuaagcKgsFhLUWkHdFsxKHcEGt3NyqSuFDHs",
  "key18": "3TdeKLTH4irB5XWqGnwK77RXbP61VBmMisQ5bnrAJ6T9YjVxUi2k1jbphU3svbu694eeyJmaXVeYytjcPf5LyqnG",
  "key19": "48J56VcCoUn3CrieXF8j1zf8KABqJuC5TM6YUkiTpuCFDxYFcGscaD9VVwZojR9ZojhqCQAu934XpN41JpYm6H7e",
  "key20": "5D3P7sibyuePBky894yktv5YDejzuCABFiicp6mTwDTf65ZrEn8GnccPc9AxBWr8Nkw6nfmxxWnLu2AovfF5xdfw",
  "key21": "4tCFWdyjYt6DejmeLz3W1EEuHb3YMYnfyXMCgqFcKhPt7pNvcXedogGEfPzwhwQcyFSosdiiM3SBGSyzuRa2CafD",
  "key22": "31xafRbw8zLd6DepLrqtyv7JC49ATx5oQpWDS55e1WKbX1BsLZGUxXkFeLkfuEQ1XNShjPojkkfREWZpw837AHbT",
  "key23": "51k5UnkaKAiu1mKCuNVALshiGMgVyAzMKQLCruvqu3M3hpnrxG6V2DkbLZhozzsLq9FmbDYitoaYZ1Efh5c1mWLp",
  "key24": "3dMGm6y1WybVQqLhoJRXWyqkQeGEPBtHPCZpCUNJRFyyHPCggDPTGCLqhMh1aCbkmKNgffn81owGZ5YMmKQ9KE7e",
  "key25": "7xoPPKVCknPDZXeMSx6sYMVEovX1mffE2MTLHagmLQAJfiM48gTZGG9gZWKNRp1isKSevPDRktvG3e9P7imi8Dp"
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
