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
    "3PLFA3zZJrGtqb6NbZSHjhLVzArwJVXiLS7Jev9Cc9hBdmmJrc2MwVxGnc35poQfNZ5M8RpR6JHyVouymYPmN2Gi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i3YUWFfTg2YCB6vtewnp9ZGNomHaLrYiYrkSDsL59sVZjX14ENphC1aWgRNTqCJBw6pRkevWLUkFkRj9E2XFBSk",
  "key1": "4UPhJkBvdCTL8ckpXxyNNSavih9cxiKER3LKQcdMiaozPhZ3FfypNCMWZB9iWaPHU9ApC8PHqhKbaLUpnaLZc1aG",
  "key2": "3cLUDWzhiTKtKmfsFLmirREh27MxwZddeiw5gHsKvnkdGdHr1vQsx6xftXJwQxEboreMP3Z1y52Aa4xEzMS23vzv",
  "key3": "4sU11pLKjHAkmDH8drBXWrWncpPPommQpbfHgan9xX4i43T5SG3eHZPDpusUfoz1riTN3JrmVgQ838dkRiw1gqWQ",
  "key4": "tdWR3ybzYTugwSJUwik3YcMjVMBLf6qTKK9e4SHPrHo72o4FkaebwpXi32TqWiWLu9u9QeQuanJTH4724tftYDL",
  "key5": "3daUT4tzimEiuppmoYpxP5rtEnDqU3TLBXxGp6zZtLbiHHH6iUNXrDbRQRgkRjQYUA5TwV1fZMbCSgUi1fzNdhK8",
  "key6": "36Lxkwk5PNcqeoezpLtTuWU7AYKiEQ6TqqViY9eHG1Md441y6CzVbUaYE41EnSGNeVV4cW9qKjqUA8asbTj3XXUE",
  "key7": "4xvAMx7BhdJB2QDCkmxbCGvYgu6BXXJFbuhWMiAWKVYE8GpeTzg94eFa4FxhESp7pv8rsjJY1MyBdTG5XNqwW6sV",
  "key8": "47FYYiNmyiGh8D8ZaiLNwydP6ZGMQtAebXUSrduYotitzsfVm1RKp2n3iBwGpdWDUvWgFHaEmfiNDqcQmqfc2B6L",
  "key9": "3oVH8EBiVkyVHaSXrHGNK2LbvbTaJkyVEnP2U4RMafYhbshpYA7QB5iMEwrD2LovUYU977QB42BTFsV2meYwX5sn",
  "key10": "5uu4fMpCyommCPYHPDHC1JpfDvPN8vifRPDC9VHpyDKzdvzGnZLreLaGmhsJ7EAbPnyWV4nXXt5y2vT9YBGEKgo8",
  "key11": "E8VL3rsaUYLy8Dw5n1t46Rekrj43a5ahB9jPSzLy8JyPkf5Ds28pDvLckYoyu6H6VYBNKNnXLFBbnDNu2npMeNd",
  "key12": "2oJv4mF1mSuRK5AToyjLnEw7x2ko2W4nnije698Z3zA8J3xQdLTUHzBjU9wD4q7prykmwEdqsjVmkX5Jst9pbfrM",
  "key13": "K77N6sdfsEBJWP3g9dJtn4UrfJFHhRzA2wyx1HYQPVE4eQEivTpNVUVM8pkeRKWAEFEGEVoxfcG2j8SwWNyon9D",
  "key14": "5Y6kZcF7CSL6ziLLCXdriwyUx32r5hWh1HKc4XGmvQ1PiC54M5e3heXVVRRt77uKWAbWRnQfGPXTEDzxzbp56Tpv",
  "key15": "gkohVzFQ4sEqH4bmW3R21jk29V99yAEPt9YrzpurR8Kis6opbduzDP8DpM7WVuMoNaswwcow4BLyP88ywZCS9v1",
  "key16": "43jxzBGigUbVmT5TTWG2cL8WYRHHHpPNea9P3o1ty5r1DbEEaDeFWo2Q8Z3weR6op2Tktk76wSeKDH5ZbvWp2e87",
  "key17": "2y6jj4AAHjxMvm7QJcBexBtL3QWzuzNT6LKj64ffqWhi18N4Qv3M8vH7Af1XPHWWXorSCYi2LrsaDLVXjbT6SSz8",
  "key18": "29GRu1VtBpmSVTkxycTUUzk7pcaVW1zDjZDfitMD6tggWiwpBUHQNMBHQpTw4gsvnyTPWdXaAJRbJQ1CtzmLYfgZ",
  "key19": "3ZzE5u4Do9GsozwwJWB7YWovwVMLpQvFr9DCxtPdzvpTdVbZi8YDCWxw8rWGp8iYKiqr3RpnZBCi3f1UkxUXfuHE",
  "key20": "2kdTy4NuQwBU96WY34pxD6w2QUjmFtnDsk24aiF4GNNfg1j5emswXcd9buDhQU9Vc29QbzdzUM1QRreT1mE3i8Cy",
  "key21": "32zkBSmJLSYGg3zKS657UaBooxmSTCguE17KB4amAtZu5d4EdkA2cERuAp7nMYJTbzn3uonarngevfSRiyFinA8T",
  "key22": "4k3ztyPTTssbPEyJcD33xxwrfCSEpo2a9y1WN4RbsNfo6qSxK73ZBM9WkydY3EoWvqnHDJsga6C5NA5VMVky3zo3",
  "key23": "3zdGdNycrhvQAzHYQCBYWvczEhLuHekpoVspiifBGSr25RC9WWueGosbgYA61hmscVX6nDDBCEUKLRX8GZqht2re",
  "key24": "5Gk9Nq2J4RLJ33JTyyTT6oSp4PNwtKtHXG9W6kPtKPdZPjHbnPucNxyrqmtHL3PkfUbC47hziqFu7VQvBVetLdTn",
  "key25": "4rz1DWG5yrp3Nvn5JNYocVUt6aWijKuvqaugXpKe3bfAFLHDR61vdbVZrWrzrodTcV86Ruc7gcCK4pY43P42eGWK",
  "key26": "2eGbsxzn7AbjYV4JhbkZpVFBrCBvTbDsZUd84fhTUJpjFViCP3kNhpr4migZQGwohMoofL5JEzDM49QPYZDH5jZf",
  "key27": "66B7kjfT2ZKXSH75svBYk8sR24KE9n79RT9YWg82gdu5wgCFaXDY6oUTsYNVvgoMtiph9N1zno3TKGY5Cc5gy961",
  "key28": "CBuWTYJW3LiK84GjfaK1ePDQ3Kyg8mDN4CYXyxfYnYVeXydat4rWVs5bBjYRjXJC9n6ej3L17aZDJwxvkiFBiDx",
  "key29": "42zcX7QEW7uQkp6RncXXWXyjEVG6EgaEy6xFAHoHbZn3DSUkuppsWdBi6GTBXnxU3N62ZsQJYqvLWYJi7SsQ1JZP",
  "key30": "5wy5zEmyTkjKERGxf8TkqrcngST5tvwosw1ghTDCXoN4jSGvWAAFHCtQkkwdyyEdWhrjWTxcoTFEddbWUvRWbDnv",
  "key31": "3TiLg45Jy3CQ4ySkBkbHeT5zJr965W8YoR9xSQUmrubCTc76HxLYqEvHf99Gbpr42Tu52cCgrQvq4ZQZvYmjhCbg",
  "key32": "4f4W2rFBLe73YgZ24q2TJ27CJHpbJi2x9NyV5keHWT5d84UoHmCKdGSWjoVimm1L1hiCBDnrLTdxn4iqh4CCGit8"
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
