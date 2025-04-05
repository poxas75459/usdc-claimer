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
    "6239jFN88HfimL9yaDmFMbXEQWkBuNZ47V5mZZf6MPGDv2zwA92EiERGLGPwzg2L9MVGvuAw5q83XRjMgPRB8rbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xHVSGP1uJQ9n2rNCcXZUoi6MggezXtuAgxRqiBBQrbBrCkgFSUiyvNunbr5UwGRiti9Jy2fubrqJ5CmC3s9Gd1w",
  "key1": "2UDNfHrQrYmuce8jNf5dwz86GMAELLqVqy6BJuByHFBt393aiyYqDMhxZGCdcR99pUnsHM1Yp1SQKoJLdkEJvHB9",
  "key2": "3ZTqKWfdnL8D6xHaipyC18eC3ReXXUWVNZNwR5UypVg6nLKX1JbaNpUiHAko1tZmHRYYTHaqfVughwQEq2inJnLZ",
  "key3": "3r4RyETwiCcWihiRxqZYmFqNUyT5onNigxF94uboYrWHFFaQuPKWb9T1orBpedzY3vR8hUnEDmrLXcsAuYZobFam",
  "key4": "5uzwWTW3ZTncYUxuwqEf4SxNoRr4SHsASaC2CM5uMtMMWb6CAvs61v6jiSvoCc28TomNb6NhMBuvaNWHTpjSbroJ",
  "key5": "Y9jiquxnF4PD6cferwzZHiLCrGgzd7L5txCL4wj7hpZiE3NTPrU1XW9z99KJYzix8MpmkQXGM8KMc8Nu58ffbna",
  "key6": "4quRao8MWp2oZ8Fr6WZPYRnmgo9m9AcAB4ZcWG1x53Eu8DfnUiyS6yiVQmmzftevDwTqCSmwLcKkjwoLZouDVwct",
  "key7": "3C3EVMBcXgaimVQt3zNfGXtsibZTw2zZeJZjkrNZx2ybZG8sm4bN2UoxfXCygtNAnieZrETgBCcpXDT8qDMSiqFd",
  "key8": "2tH2ogSqeeUSK2WoFF9y32zGNoayJoxgJtBbnHmwWkW9q9bCv39a1kFYgogXDaGXDrkVDAudW3d63PdUJdRGh2L3",
  "key9": "7CrwtcZzSdoUja3BrvqyJKWrqb7GnaRtUCfJ4rYnqDGgwoCR5j11Hgctwsc5LWWPZRV7pquU44ty4TWMMU41BZi",
  "key10": "3pjCKn1Nci7CQZbUS1WrkjTPP385yqDCBqVgaSZfGUvBz3tN5hS7UQtRZBVrEYk88H2c3qRRCBXLpfNYjvd9vKRi",
  "key11": "ZSEAW2TiUHDu3Cu564UXqJ46j1DutZWVmNg2CLYM2tt5QPzNEEbmEHcYUARv9gSySXJxC8FGDxKj1bXTFhkVve9",
  "key12": "3tJ3VVcuisNwxqkBnQSWY1KFscsEcacap9jw7BAyMjzqKvrTF9mbx46hBpsvSQCs5WVwDRA2zQ2sSLHPwQafPJSJ",
  "key13": "3Qa243kUUQcw2AsSmwZw3tj1BybwvAstAcSvU3PwXxHothEzMKNcSj7dZQfPHeKC9YP8Qzhv9gYcbeTuzoNUb6Ak",
  "key14": "4SskFSKNUWDnVE8wD9MJMW1b15ypnwMtDCUvNWKoXHeZxiUmX26sSiLX1u5be7iwdDjwBaYgFM6j5G85UD4PdkzN",
  "key15": "6BiGC8DL5U9LDsaTYKmLCnBr4Sk8CpRd5PzcbCDtgWUuYboaSPBkBfjVi3gp9zW2HxvjVrKKa2cr19vqUPSY1QQ",
  "key16": "4RN3LMvXbsAPHFgPjHVPMDYJxYAbvxHT7P6Bvf6amMuS5j9J2dUVcuCaup8fDNJ7nnDxBqFCjUnvwroSvhte1q1y",
  "key17": "27VUUxrkPbTtRQ8wPWePT6VA4s18sEk1RH9UupdprCyr99S1UgPAY7GmsquRvnr1fXEvyY4ea4Pno1zrqn3iMBGt",
  "key18": "3dY4br9YdosZ3CKRwG8wdXuaQmkHiX1cpFhA4gWtYRsyo6tUgqXv3nrVT3V69UhL3qpg7DtxVP3vubc1CQN265VM",
  "key19": "2tWKW4wdUfFpGjmLDYJeCDtbSmTE7RkLhtJeaREb5ZvKdR4iNHKh6vLAMkunriKHQBrUCA2UaTcWB5v3BkLXRW7C",
  "key20": "1ZidbeqiDBdfCibqo2dESB2CBNHpoKoAwLrFCTYGXKxRcvsbLdrAP57eGWDbf8SLcqsECFKZNmcnLhjRG82kz2C",
  "key21": "3539WJoJLNidjsgZ6NjkEpPZPNShnJEY25dss3u7ga7LbDkKbxjTV5EBEeDYtJEny6cqpSojgT1WuedaTsCgJxVd",
  "key22": "2zERtoe2t774nkPYdzJQrbfgAmpURFYPGizmHVmfd44z2jsLGXJgr6GP2gKKcx1jw8ziJA494TKA5atoizVirfNr",
  "key23": "5oxouFQMPnEr8onS1KJUjuHwHwGtAE68JxS5sPmptZ2X54oSiG7CXgfF9eGybFKsvgUqJi8R9mAe7uDVuAaev445",
  "key24": "2mxHsNfvsGoR5voyAZSisH2PhHpENyCGFkpxG4aZCBAM3Frh4FEqV3DHpffZDpzubqwTumGFkkP34MTcmCquVgLa",
  "key25": "3kGG6qpR99tWcX3Xz9n7wyNUC7Q87tVwJgEZZPuTtL4kjp1Uoder7W1tiT4w6hpunH8boTCWbdA9wNiSgJrUMfZ8",
  "key26": "3hBJ7PD3ffL7gWUBSo1LDXMbTLAzrAj7ekuvkDx4zDba3Ldf2aekdF2v4RysBM1hfairo3KEYhz8PXegJtWvU746"
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
