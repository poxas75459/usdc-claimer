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
    "4YwrFANGxzVCM1M93YRe9vzwFcMc6ZLxr1ohVGVxa8pJbf4rhXbMFNkTqiZgaSCh4yZhrSuYsY9rSYjSVsyCD9xG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RNGzHnzNuQsjv7LpEHsL6onuY3uyZfU6Zea6VZxtCEGpJTT4G8XARqafME58fnV2wGC6dJDMMGeB31UNTGjmMSd",
  "key1": "3srPSYPUYfu6RgcQKajtMr1ozmVFM9QAUvZwVCtsocsEjCPiVqwYvdunm9RkdQmkcwBd8EDPYpX8az1DsAK5GEJc",
  "key2": "FCUPRgZNzJa19y3xgU4AEUc19XGJ9wZ4G3Wnuo7bM6QQZzFAcvX8wTjUXEh3wi4EJwGNJM6QrwvzZBsm4g22he4",
  "key3": "5UxJz2H63X9h7nMMywnDXYjhHMpLjr3DNikHQ8WPeq77f6RmBRUQVz8UgcEMwtDGUJiWakLaHYAjQzURedhVgNL1",
  "key4": "4C6PdtqzGVe8zgjzH46ZdpkiEQ32ZEE7qK527mJcBPUenQGfesc41F5gcQNJSugpSrUfhcwCXmerAyowNJccqzZv",
  "key5": "3uVxt8PTyqi8vSgNGy2ChZq3mK5uuKKXBrE8jpEqf97nCmSnTgxkVmNsuUz8WMZLpB8dq2ApmU5fba79JyqdcQhf",
  "key6": "4gHsnwo4K8k5k1hgJXpcs2Gp5MCym423oGMD59xWEP7uZrtmQx3PTF4BXoT7BmFwHa2vj8D65djREZStuRX93Yqg",
  "key7": "2ubi43UgV2CjcECXfUZmV7unzQzCxPhQ4vAPvZRoEwqYiAm8kFjktSqzBmSV45bNNFqW4VSoycqpyrXhrSCHoMWF",
  "key8": "PWsx6CvDFsFtATzs5qpknJ2q4H7wyVYt7vzSEuzQAL7bztsLJC1WnnSpfvcabohURPk9J7U8DXLKiGwXg92CPJG",
  "key9": "hjw273ZPGrjGJFLawYe3D1KwyaSN4xfuZh3L4NbmpQxtoNz73vXJPFwF8tg2WZ745UFJzLcdkEcE4w3X8EVcMY3",
  "key10": "5cuKdn1hvLRonEebbkesiNBvjKpnTB7wLTjEtJKmVxkrtVekMmTf5iN43aamZ7s6xZvshQm2472qJcBwaMnFzkQJ",
  "key11": "4KKRJxDU9P1A8B2Rkf9pVFEXNb6RJuCqFxAhyLFeuNDDSmCw34vvzd1Uhy8mun1NVu6eFF8biX217TNNNPUSbtif",
  "key12": "2d6omLtJbJcCYAuY2sXBmXaz2y36NAPrnYrgnCEABVh1QFYNfV9zc4jWoMik7kcznLsgnR7R5yEgxNNX5YGFQPdd",
  "key13": "4h1s8VygpYfkSmdDhErS9iqTsuTSgDoqqzWZbgDq261G2KkNvm5mdc28ijCgQeorW1bRP5ueBvbaYRD76TV76B1g",
  "key14": "3vPPepUjzEm9Rpv8UDxpe3Exvy97hfCCR2KHbx7NfTumnhxm59EYZTri2rz22dLDteq4ujRJSLF43dmrCZb8h7oo",
  "key15": "5oKNLXCfAKCogEQLvT323DAgzZNhUeULbxCPj6w2XQRupS5xLsQBwCf7AV2aTWhQ1gwfRp5DmdMRetp7eftpWkZ1",
  "key16": "sXvNv4gB4keFfgbaznx9ZfPYpFJzCB9FU94hMoMPDR5R5BLTHTUN96PmCxskmBkPkFsYAxP8n9UmfwpGnV8obsk",
  "key17": "2gAUUsV9XbqxEzB4C5GubqcE9e1yk4sNz1TLccJQGpn21boPUdDvkGxQskC5E4AzDezcFePbmhhryef7JRWtpK9j",
  "key18": "2AZ4j4aGDQdPx8zs3FvfG1dL5QPGvwKUk9qL2aQZzeiBQiDGM5L8ijuPAWnFaBjg8tAXSHEYqMsResnWcYzDC6XZ",
  "key19": "52YsFvAbHh89QZCsgcKmqbUCSYQ34Xsd5bNWbcbgcZyk4LUymUbrfnPZGjM8j2nKesV55Bh8NyZquNqU88CnzrxS",
  "key20": "2VHmUxFGKABqaFYhmHPAfzd2WoW77Txq6ejwmcuVRe559sqoBpehDgYhK3TgbQ3hKGENvS69SA1T37gvVHt9ec7H",
  "key21": "YQUtTVbKMLx4mbjAtxQvsjWiSwqs51fkgT3JxuMwFsL4WamUZN3MSU1BN1Jyeg6XHY5oWb1TsYwKXcnnhjyiwZX",
  "key22": "4Zbd5y9mHu4NtFc9r4QZhrojKLaUVvrzWmagoqA8yjpf9rbckeNG7ZnR1rGEJUsVaNUG1TBipEB1879mLM6NCRnb",
  "key23": "63tPq4LKYncSkDRRjYzR2BjCcUDg3UtWgCD8iaFcffxXCSb83AAKvC13sYt2CKfYA4EgjE75AVXeWKUjNo6xfyWH",
  "key24": "4rwbHkUNtbguSiUJQ9XeJwfpYva13f3jWXC59u6UcSxXTrbt8HUePiws3fi5Tv8LqgSaojjjSaKbxT46WvqTGBMN"
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
