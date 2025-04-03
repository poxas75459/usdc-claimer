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
    "578eSdP5525oKcF62m8WAVRD9bUHNgLn3GZobMAN7xF9NneMDgthemEx4g7N2ufvNpUzJJinSWJxo8FZ4irbyCQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nyQpV7AVigLLSJdutNE28hJnZjuAnYycioJ9C217gb6Hgr1nQrwBbEZVXHmg7CnB1jeJdk3LKV9tFy9zMm35uSe",
  "key1": "2WkkiH7mZ2Wk7rQ9jKJYVcGcNjRKpFyaeDArLA1aY1ztQHXAUv3WCK8bhe9kZyjevAaTXHQbtcAPBY77hkEsaPry",
  "key2": "2wVGicrmh4ymwqKZpDULed7qoxvSXDzjjEamQ49CjhMcow8Cse1toQqp6Rp4TSRba73ucztNif4EwemkwDUGNbts",
  "key3": "3j8Q9b5efJEECgwf8JG9BQZbgJb6aWxxtvAqBnnD5b47a5YmGjPp917hdrjD93eyGS6hExY4ixrHAjpXhuChptr3",
  "key4": "64tcQQAdmEuy2MZJdegHsj9tBEVC4BXNE4arGSWoStDpYCATnMC96ncTyJhbE2WBVncKrtqADcmXsEGeRE2zQeEK",
  "key5": "353VAcGbdmwGPbDVG2soa8ZLSKBq4viNQvZkpgNhekuL5s1ke4ms5zDFAw9WYaixEtxs64BzZ53Zg5ZuTdGqs11X",
  "key6": "oY3ZDyrBzJnzMj77Uv5mvwuNG9hXUvEneJ4BgNdvZsFqrzYitFP7eG2pE976YpHgG6hBCppMQiFsaULJZvobbxT",
  "key7": "26YaSaNmnHtvkr72wVjNWp5FGsgqfUTbGpihrgMzYBT7JACFv6M1UFaVNroX8YM1QQSwxjC3FvryEh3982JYuLnG",
  "key8": "42LEBKKHV51KtzinCfL3sMEQ9EhYAEvLockYPC88YxG7VrDb9LHRrKRDCHbHyKoXE4vATGDLPCVGXLG7pj2P6Qij",
  "key9": "3AKxN6bWPofFx47PZxNkyWp34roEk7DnhNp93bgCqeSptouJp3kEsBV9QpkvQp6ajKLMSEFE96UbW573DRAN7gGB",
  "key10": "2tSgRYB7aVPYvCWBV6Fx4bZqJ1sLTdhorCCj5YgwPeyQsgj2Mea3zDxu64ngoRPX9do9aLCHoGdgmn8GjWq7t7W4",
  "key11": "4PrA71oH3mCssyzZS6VmJbocpZiz33r2DVsD1QHnRa3hGX1m2mU92nh7APL1MMzHAvYkqibiYgSt1wf6by7Xpamt",
  "key12": "2Zn14GdaoAruT7HsD9Q8nTGdLoQ4ZjauAbdaSnm2wYWoaUVWPXKHs6nzQX2JNd8f7cjZLjFR2wSvEbGxbuUyv27L",
  "key13": "3aV6RgnYngSofUF9KsdSQ4ZuYNk1LcJqYMKYkimHFyp861DssNgjSpMzk5AA6nWRhR5mnAYrCd6RNGw4rhgfDHGn",
  "key14": "5TVgM3mRNcbXPve9etPzzZzWZk24jZAftnRPQKKuMbrapMpdRtfKcQsbwjRud3nuqxYLyjqNbmc8nhYeDh9fdgf3",
  "key15": "2dovJJ4tSyKyzpsMo8smPoChmqhrcMxvemfHFDBx6ia5e7YxmrutPNhqKWqQF3hZkSs1GwH8RAWn2chzZrGV7dhH",
  "key16": "4UGALBAu7HMfnqz82KR51VacGXV8tqrvAgmDF3SC2G6MufARu1f7kvmZdw9pMrDVrkxgCe9EkMDSya8P1AoMT1To",
  "key17": "8w7MLHV2gtKtSMur67PXMYuRqsuaGfW9VqUfs6CxqTADLXC1CXZH4bB5fUijeSgnSa8F8EoGB56xzsWrfTBHrjv",
  "key18": "41ca1G8vhHCPoBzbpkrYPD4YRMKRwMxMPa4j9YMfCCT86Gin73WeoGRStU3mmQ5yLyDsQQYpMN28j7iR1c7z6iDy",
  "key19": "4k65ZEr4XYfPtxvcUwytcZum4mbFifz4bMLJroYu57At3w2Cg1Bf1SrGzvnDHgNhiACJTWaU4Xn5vG1avJHhSubw",
  "key20": "3WTtwwva1A6RPneG3d2miCtVfnw9gupwxDSMii4nmGUBmj29s1nadjJC6SxE6W6oRE5riztSm8V7wTfLVRKhsn6J",
  "key21": "4S88MTWiSLQL8X7zXDfiKzuKJq6Vej9SFuugk3sXS2adH5TxCXrBh2g7wyVqA19H1e8tarTfafyQbR8RaU8DUwCN",
  "key22": "222EH2L3HRgNhYUATb3881hLwR2ZceDa4xboqBDAbhe1WRqsjbmaUhqovCkXbxmk4og6rBBWpey5nUJQTwjDurws",
  "key23": "5FN6cmWkNRjnBZLEmiKYkWCeNLw9P4RNNRoHF1GXkpP7H6KyCbofrdrrEWXV4Z42K5nhTKNj7sH7hxShmwy7xkw",
  "key24": "2Wdbbxpk6pgfzE1YD9DoBWqPwbvDoZKjFzBje7nbQfjeCXMBFebYyGhWVKVEDtAUBd4qzCLAoU99sKRmuA4C7bjR",
  "key25": "4378wfoZVhgZxtR4P1uAMg5xbBKo1iGXhq8XGn99a97kYqYBR1XBDvThQQJLzpqMV23W5T1w5r8H8C6ZPMG3qyU6",
  "key26": "2gnbMFM81oUtcNh9HvmTnb5mTsYKRKPqnh5fBR4Ckv1mbp65WEbvCkyZGJmGoHmcoVLj5DQ7rZrNkr3YhQGLaNur",
  "key27": "32douwqoEMFQfE6uh78BEJKfdx1jVemsgPywnBDvvChpbGsDVSPo8LCm3eUbRiyGR5JGXtyu46BHNggsTynTd4gq",
  "key28": "4ctB73SedRpVRe7WxiURvLyNXSzApuS12Jqzyu6d2uB3r5ommrhpMymGGXQC9Dfev4mdujcxe1HsRwV2AKhbttu5",
  "key29": "1oX6ZHiAb6pmv393VakajC6d6nBvaVUzoGapuK8DUXJcyjr5MMoNbRMu9XeZkUtsGgF2LKv5HeqpUSk1vHDCBHY",
  "key30": "2nXSd8XZ51Po7JZkYbk3AKsT3qsU8i6TM8jiFnqezwNYbPKKfQugafdG6aBcCxZS5CRYndE5GBUoDmPz7bYy8MWQ",
  "key31": "23Ue4dibrxQGdu4GLDVzqcV89tdAqKVWPG59QfwNs8wPu71v93jpY1cndKT1aXzHhd5bJRqfWkbK5fjYDGnYeLJK"
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
