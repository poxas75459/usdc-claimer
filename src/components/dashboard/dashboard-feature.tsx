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
    "2YBmEAZWVf3ZPzTP6XfadxYrCHbZLNVoK7MkPdG2PxVHrAejSXTzdDxroVCQeNY5PoguQ37tgqqdHkEZBvw6DQC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tK6VXjhu2wqRCUvW3EZAB36xz1zAjpkX5ni8aEUvvKgVkqpBUKyZhcAHwZ5svVJcLd8woBab3NddAMJUSi3mRiX",
  "key1": "5KHaTmy6bzEMDYowqvAxboCkUrTA2eRLDiryyKUM3YZkVdmeDzDbKvC1e2dYg6HDD9Hea2WomDyKgPPTDZ3Rzkk7",
  "key2": "2KHL29YnA6ewepk4ZYXfiybWCvwk21naiNkEQ5fRqyKpSHGzBGvAStBVde88Rs9bGpeWUP1Y8tkgDSDgTG3amFvW",
  "key3": "53vs7JtErcS13amMkMUWDDvb2NHoaaD3Bv8e98F7ZDJ9U4bbXPko4pgFGKhAZcP7Td98dYqC18BMFMZVSjz3UFCv",
  "key4": "2SLgZ2HTeNaZ175mAiNRuXj3vJcRS7RKkzxhX8j531LDY3q8eMx7mHPRUb5u516ok3pRvFTwQHDht7QvjeqN83sS",
  "key5": "33HnChyapVvgSdrADztGHatdBYhVN2eUfZsGTUmsckBfSSLUQADY49mc3dxgCUJBcgnPYwXicu59H1PqsNvWVbwY",
  "key6": "3MaHBYzqJZEvZwqihYxARZGQqn1f1UFTQUbThcAzuZcfugip1zjHT68oxJ31hupD7hwFKQdLzKcEzRmv1MU7HC1n",
  "key7": "598HcDddkEmqNkK9pygx8nMyvM6Vk5XdiGiQ2aD5KWnfGMvo5oKK2jabmtAyoCsnkxwmTKRrKzfshG6F78PjWMTj",
  "key8": "gjCkCgNpc8hqm7pYQKzaKWtQcFsvwCS3Ng4sf58GaQAd1xbDrAdHE3V5AXGxawZXJC72VNcDeFAcdBRanaEupX6",
  "key9": "3aNS5vAn7hH7LgawASA2nB7SEdLonTxH3rAFq1MyNS4QLpfdFdBW4xrNaZHETDSFpgS68mZdUpAWeek27MDAmhBY",
  "key10": "4bNZ7aF9UEatUvxTJE5uHKVXMv42AXMRLuYNqFQjs44SYbAwXeX81tWqSTpyfm9ofxEXrKJvxew7N9CnVYKzYk8H",
  "key11": "2Ts9FxgH8QkzmN9nkV4o597unkRXiBZoJKo4PpfthECeuPVoNdJsuUiatGume3dKUKu57UA3S3Fkc2X7cTd9ZFsg",
  "key12": "5w19wwVooMoCdvd7dnH6czLubBVauEoky9MgknSFd81QyN5KkDeCeuVNnghtkX2cnhWSrnYfxWFwkByZwco8iEUc",
  "key13": "56QCgzVcgeE5YajDPvm2ZdCvZozmyB6wwzrXZpWgAtVfpquT2EBfCXUkGQNKXj94Xjd96PbhpVUt1QtnQcwpJKQn",
  "key14": "PnqUmbxuchYPs9GVmX8RNv3esq2CpYQTWXDHKShtW2oqCoq5vR7k5PbVQpTDSywYFF9d3BCsVr8cz5oPw3jAeQ2",
  "key15": "4Vo3kWxFPe4Muh8JdqV8TV25QpX4mXcoFAJ5tw3QuYdbRmdVsKkbQ3i1qggnApQpgMRHUhddniJbXDesWcYJPELP",
  "key16": "4yLnZggxyRYf6HVfuuScLqgXPKhpdgfXHFfamXBdT5NKbJZipfgWGWeoHDyKAA8YASM8mTCf4qwJ1uReUFXHRnqB",
  "key17": "zf7hutWEvTr9PbfEcagP4ZmaEsWRHL9V94pHQ1Sg4FuKbcMZJVHPUJhCVqb9fpm7jFXuvNjgxP3bozYw2gTGMQf",
  "key18": "2dDSQuTWgrPzTEPnoXY8hwMciVuLoFmMrHDFv4U2N3LfSL4QjhdHwsMYebxVjct3em4mayDSERj83a7Bs98dDzsc",
  "key19": "3sL7jamKeejQCd6hAzhDypEscew8T6uuCqVqVR7FBenWbmRX3VsPUWRMNJecCv5SJy3ckbiutefcBs9YRbrWXYmt",
  "key20": "5e2Co3GR5H5uMueXnGDnesFASFLitNoFnJY2nFa3Ls4VwnAfRbi2cG7H6G7FTqd7F3d8DLFs2eHcQpJgedPk9jh6",
  "key21": "2aoApfksp6tY7uRHkGLbsPDWRR4Pm2qhjLU7uXPwr5RwBiY9EpSyXZTYdiZWYNhrJjhWM9QeYE2LvWss8PKa8ZnN",
  "key22": "67JcQaxmKsmcqSyktH5dG34tuoPRwxoHLYRD7HDMvToJApGyaMnvfb5NbBGDPA21FmFBLhmpGWE9SAgJGV9XP7G4",
  "key23": "32UAmX4rWfzswBNSTpXYJ27nV7MgsRm2cpKS3q5UDa4R4isyk8MsF2cXhkNzXdik9776rBXud4HG2L5KhKFhmd56",
  "key24": "3avFGxUv2ByWMG61nUBey6LQE6BqSg6gwXfqzBUgqadpFLfTFHD3JKZiSunBwj9ctbFx7DVDcAkZY21YWZGAgBwd",
  "key25": "4PFxKMVyhTyYXoRq7PVYN37ESGM8cC52tkJ6daLY5UUgum44g1UDpEyL9MchHH8v4wFHt63cULe8MsTqiNuvAv9b",
  "key26": "taZ2CEWSTQGvoXFVfB8NgiZuqgWYKvHLg4jqSL4NihRC6H9gpuRZ4bUKU2eUadCqzBwt33hNoeiUpEbfhkrbnE5",
  "key27": "36ZwD6okenftBhShjbcra9FSJVz65QuHiCcnpJqJibfU26bChSPkLBeRH2KfVnmP1tjgyUT9sjyW3rrJer7syMN9",
  "key28": "3UY7VxHqv84yCKpsHxQC2Yo1CqxN4GHg72oghjnfYPTEjHjaC4FT55TdwJmHTh1DQDArPvjLjpoQ64G6pfipgQUQ",
  "key29": "wjaU9NKnZLemqf9TgiAKBGxikQ7GWVHdct9EnzGxREKaT59fgAFUDMZTWTtf1Cg4bB35rMXkHY8M7ghhizwgQy4",
  "key30": "36xCkFuso4YcCzEu5bqhUJBC8XUM2QRhFeboxoV755ognKx8SdC1vHL1drrWdbjErr2YBp4u4NEJjnkDX2m2e72u",
  "key31": "5jQLttmkmg7zNkrmU1Z67aidtWmF8wBrd9fbHe8URDsNRFJTeuJiqhsZkEc26DaLJNgdaDUe8XBLW3VinjxLBDdt"
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
