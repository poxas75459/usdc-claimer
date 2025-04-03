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
    "5ChEhkT9qvinxRkoY6WgV6Goew151dRTyRwjgfT9837TJNwXoVBUaQH3Xi2wc11dxw43uitsKufgmcrbrXGi1wxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vc3PbDeYj6fuZhwsevUpUVz44V8jogd4UKH1pdfWMC1AZkmhDcgqkUs1iqLcM5LussGYzb5g4x7ZjErdzPDTAAs",
  "key1": "2kqnq53E1mhpLhJTGfsKPqNEBtR12jR3MQiGaRA2yj5Ue9Rk2odpJxkwxPBU9NurzEVyPY5DC3UAsMtVgKrmuTxK",
  "key2": "59Rv3nsyEkMWxRBWxhg8Bme6HGDnWv2Z7no83bw289T8XT8uBCAEfaXYepscFWTp8zD1GmjHj6LHWMntC2Z6E77m",
  "key3": "5CmfJRsRM5N5uQryrLDmDFjEededjsrqeckB7wBjQ4pMJqhSdEEW1xxK9Jh2r4aKPmAKZhxzvuCZFgN7KYDi9J5t",
  "key4": "GaRQ31WDGyewGgvwaJ5QryNjJWEaGq4saEKfbdgdZzop7PxvNcXWZ7yQQZgjuJ96P24rFBs5G6qyKhVBTHwwsJ2",
  "key5": "58GsXNKwDpb5PyTzWn75zmXEcPJCVEvMnkpuEgSrn1BcaA59gC21D9ZoFKFzFZ1JypLZRccvmFqsd3Yt8ymkG22p",
  "key6": "2BQEnau59hKn6TRqX1Jrc8zDCge6EY8z9GHZvdypxKTM8HM22yowQFHd114MrtgUhk5XKxwrGGUZv7NK39iznCgu",
  "key7": "5QztVtpafYdkYW81XZhpHinFUSMMPDcexcWSeb8UhzWtku5ySW9BGWTZ3niLFu4npQ6VbzmpYxtFstKaLUa2k27C",
  "key8": "4gQgreQWFsXT9Pj6Fkfsj1CV1d5r7AHxzAZpigtdkpmGt2WVYwXBpkn47RsHqSdbixK1FTN87uxFR6mi45CFNHka",
  "key9": "4t1yNKy4BfyDx88SmCjPWo98EEpmYAEAAvdmuroLThVRCRg9hmnjwjyHcT8sXcrzg5i5oHFZdjdRbh5Ak4pL3Cxe",
  "key10": "2Dw3RhFkWCAeA9jJXkZvx3CiyGx3SeF212qvYhciZc3hBim3Hc8ThX1mxnKBoqnRpVahxWfqEwpQLVqnHeMfpYVB",
  "key11": "TCGMf6HsAbZT14rR6u73DKeiCyt1xP7gHvP1HD3CzmRJBaLX6uyXDvksbpgFXHPHCxWZU7946dao96sxWekM6F4",
  "key12": "2AFkVQWJDckxzinBPRu8SRptScWFQaL7Z7tFDNHnGRgGZjQsHaMkmDHt9d63FXou1DU7KS7bHfTjAfYDy2siFVkM",
  "key13": "5LVVuTscXGhu8E9HfqcY2mHzbRo5NH9myaQsZ9GtV1DDEEX9UbYTnL1XXqYNzRGKJH2dFgEYGk21zp6KTczrSycp",
  "key14": "5LwLvFNuZkJ389jZQzmhe5qSdPE9gZhjV1GTUvPBkYQU3WXptjtukbvHj6dqLci1fovUhGzJZBdzWgPSXw3HCVQe",
  "key15": "61uGVjytCvV9RxCsZyZLhFoVi4N9YJSkvmQN4GCPUsoBpqNN2T4Reav8CoTWs4V4xfnK315XJX3tAcSSAq1wLQQZ",
  "key16": "dMLB5DJaYd3q2cqzBpqt1AmmVma1DcEW7GMsnvGwcR429wtSquPKfVWjuoGhiyXEp2LFSLHu8NVNkX3NxxaUARh",
  "key17": "5LNiENe8FxrRSA21xxYfMNZy1BcSA1rR9thqgctCFMCxfeBZ8bTT3dZgSnG5XuzsFhzMp92oj8LAMXmhVTNVbSxx",
  "key18": "nfvkqDQ9PvHYrtFYhgd7zjFsLC2APobJSWyDCP3m7uTgkAvmii9hPVvYduWaPx41vB1t7Bqk42hNv45SiHKYajh",
  "key19": "65D1VbQy1hkm1Q6aLocBP5dc8GqTmzBhbK3asBmanC4w4v8Lvx4k7i4iyy3XwLqQMRmWpkZHoebfSMBRphXvAcPS",
  "key20": "HjpH3hFPozsUkTAESpL9WrAhuzrDKeaTSRwTxt1djHT1fbg9SSZtXrBWh8JMK7x1Q5hPmph2Eq4fUVc5g5MkdsB",
  "key21": "2LmaSeLffh7JuSPPRZ17ZoDFKagfiiCVZYku26ayq3DdvJWCR3u9ZYn9WGoTj4aLiDDS721RMgTvJH1JqisYEjoA",
  "key22": "4w4ZnqxPBQAredptHbX4BQhdRVbfsQ3gP3QLpV1RJG71FvVwu1XYExyRydmSQh4x2ifCuBLPqiwFTZnLzfXuZZY7",
  "key23": "ziopzHyBEjWnaeWjSWK2SpYCXEwY7UJc6TEn9DYr1voK3oHhudJy5ntb6z5Snmdkpn8C94Sm31djxcqyJN4AcTh",
  "key24": "27NwDbcFkxvdZxpAU6vKXsSx6JRSPX3GA58bjoaqWHFa6rGyKKW8VpnpYFw3gWdCfTYwEcyjQjdviZtJJk3xbhVi",
  "key25": "5PJN91ZvivBTMEzjM3rKCLaJp1oCHL12NimxYvTxZovuaSxDSXCw45cZxBwUqLGnhmprFfsHJ9hBe2mT4LTN2yAJ",
  "key26": "a4Qds5CuAn4qPNFE5T2gemDAUfq18tojq8wwtULMis7cDCquDpG1ZV77bEHwfzXwoQNU2q2jCWFr6QzkeMSqLsY",
  "key27": "4nTmzQLNK4GTLASTCsw3HyAmJf5rRcntw33JfQ5hJuM7TeAsdY8G7wo4gifuhexuKWv4Mz4irZNt7ZEgreJNLrC1",
  "key28": "McBYTP2hKzHBX1MnyRbie1CZGwPntm2oMxuL3J6X4783xLgnmuP5Ng4H8Sm2fBgo8cfzLctpMHdejydiR1uUwHW"
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
