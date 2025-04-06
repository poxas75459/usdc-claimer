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
    "85diWRGJrND4JZL9mFmJeU94PZYd9ZbegqAHEpM5zuN7j4r316bTmKfVDExFqqPF5odsc7Ny9eyk5PxSwUMqGRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "phbhBPvZ8y9K9wCiUrhj4Efusp9JqcSTKVpSvurjofiDtic97BPwP9U3TnDUYFjtxtzvRmx22PvgoZHveznsKsT",
  "key1": "4nzkEuke3KUJztRzXmHnEmR4XKPfxTQVdCdxGKm95DJWRws2eUTYM1ZW6EZQML97K7kcTUW8U3Li5o7bVWMzftdz",
  "key2": "3qpGB9GXdhnTrMcAepDhj9zgcv3n4gW6LPjiBs2aZ4G3mAR2ScBavLKMtFiTr9coxhwGGCZ5uiACfVy8XNai2Lga",
  "key3": "23RtgPb8aBALxwpagD6fNijDsW8XvJsCWHP6Kmbw4n4oLmH67sFQUpmoJf5ptaYm8XHw2Jz3Xep7KnmdZioK4bos",
  "key4": "3MAsW2JCrZkvBHaquBNkUWTquHVDTDShs7zQNzbt2K5yVcg77Yxr6aeUkbMBbyj4iMZvS6T1H4j669TAP9tQDJvh",
  "key5": "5AN4LBuHjJGN7dEHg6EaAcph6qTZJHJmPmknMriGWQYZSbSszcDafEotwsDUGeZhUnT6ypJ9Hgz9KgsyMG8Wto3Q",
  "key6": "5G92BMzfRKRFsWrNNBjHCG6EsgHxrAwRd9qBz7xwHW63ZrjCivJbxoz1KeHU3yBsv1VAfgRRSKFLaY9KiEPKqAXY",
  "key7": "28StiTf7zVDXkW3GHn19FbhH9UHdkxA7p4ednbCejUoPE1tyjHPZZvV4xwz7euhxttF5DatPvZhvGWnoF7JjQCKn",
  "key8": "4aQ9QkW2eoYuZTAhHjGjG3ZxejZjVj7pyNpm1wYfFcSsn2Xe9rdUbLsJoHTGkNSXKanVPSrNAS6qbzBSodPBgw65",
  "key9": "4qHNcxJSupCZr3kBWtoujwWSjor5TZg8rGCas2D1GQrFUzzbvu6sUNPTybeoEPwU9t9A9T4zUPuzVJ9vUhuqFUp7",
  "key10": "2rqQ5rdB3VM8VLSNPBsSgzkXyTi3ttz2F6jHcsJyqZbU2xiWCAm7mJqhV4iRCAfpGXeNr7uPefS2hDRmAF2C1d7",
  "key11": "5jRQWtU7fy6RbfPisW6ikAB2xes7Jbe6akrNDeaUz8pej8JFFJRgsCCKnPmWEtPKALady2qrh3YqauyafJ79G1PV",
  "key12": "4pXFvC96GmyD7sDMzLowzC2MberupkdtaGLBJe7bCvNVk1kRKJ28FGyRpCHfhTMQGENE7dHPdrRfveruEv4EhvF6",
  "key13": "3phmdM6nwtsHB8Ax5ohXoiarzjJs16ZNhTGBDbT8qhqFmrygbCUm9LcGvqks6L1XxbhNXCA9umxapdPGAWTmEoLt",
  "key14": "ezikqMUaj3x1yMbN78RJGGVahqjnj9C8dFQpAANPtjSkX6gdYvVSrv43KXKWQJHfwot6UkCKkEHuf7GNkJgyzfu",
  "key15": "578LMU8p3PKybyhN5W6SPcBeHtDhujdtZCvDk8B4AXUHhGb5KLSPsQKFKNf5CXwzQL1VNXTEtNVSKGDzFczgQHZe",
  "key16": "MdahkC3NPkAdrazsoSZeUgQ2cyFRB6aNBJwaYBdFMLHfLP4NuC6ZJfJa95s8W2Sp29E4V7tkBumH4gSs4qEM6qj",
  "key17": "5GmuHn3BgZoa3SHJdu4m1GrwpMkej6SQo7Zon1UqQe27eVk2NveDfKWcaA6VeLxPcQnRh4Wt1iph57h3xks7g5fZ",
  "key18": "3p1FentDW4u967sSNuhPfR1ESPge5rRTPEkaUpvPT9mJFhrzTAY8nqSzqJZ2ozNjbFKphHq2ZQsqpmNr4KhW77yg",
  "key19": "57SghFN63sRSAkayoYCrAW6UXwHzHqse3GzaNps3MXbiM6u2j7FXog9NyNGD29x1cW1TE7y6TDfSNeneEYt5MSrv",
  "key20": "5GyDbyfrcjM34fMnRMfRbPCqvV8A6RjVgmMH66gvndcsMtbsNc2MpfAswpH8v1w68zXRsJCfUy3rQQgpmDPMGXme",
  "key21": "5gZDbUAExMZJqEEwFqw7wdQ3MEYMzMoRmvTSzVTdgSwav7Fth1Sz16CmbvuH3CFT7sXMLsyRdHQJJXT1YJPk9L3W",
  "key22": "Ykr2erxjKjFoXKJKGMH1YXAtracW9nWrU7sWfUdKS6U9Do63pzAmHFE1RVoRkbYL1peBpfqA1NTFcKmUPLJQZZG",
  "key23": "4Ba7ciPQdRC4ktMv8f62yPJczn3jceuUDU3uUGyUo3hM4w4ogDkNaWBB5kP2Su9WmZzYNdTAEvaUMRu4i5VUZ93y",
  "key24": "YNWKEpgH3DQKvDdJRaNJsrWQe5JhQ8sNv6nVxrFoKuHAB1suf2VbWnRWMqiEcc3rDT7sTiZGzSmavH9QjvjvfYo",
  "key25": "5xq3xpSk7CHgHaJ5M5y5jxkTrDxQrEDKyQYnSySVfWxwALgejUTYrYcMGwn1jHjyJ8MBaWMM7jrs5DmuHHYTtyNw"
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
