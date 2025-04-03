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
    "48LjG3H4PGJ5g91HtExNph4JSYSieALjNmGWgpxyNXMWZtyVeeRbKuqiBkQFfeaFYE14TwCBSkvbwhgaTTNWxFCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhxfpTAgdt73jM1EhnKw7uG57eJW21XdVX3Se8P7NLVyeFbZEb9jhbuTH2TNsXqgPiKnWfQWtPQpWW4viCjD9oB",
  "key1": "TetYZPDr1o64MaJGa5WiQEM4fZMXU4Sj96WHu2o7vnBDC4BzUWaW9jFXke4S5Kx3DKk7j1TJ7869XrsC5w2jdQi",
  "key2": "CrjhfKQi9VtwkV49kfMjx5pkAe1op7645Uy9k6cn73hosHxYxSKyB5V54J9v6XC1mhRnKF4GxvVpfy2ki6DRdoQ",
  "key3": "pjrJsMXrVLGvKWxVcwu2N8sQZ6q3Xtio1fBmXrD5GEWKU9XNJdBoutzMJtA9A5hBumx4wh49vUnaoahf876eyuj",
  "key4": "4eUFgCfwst6Ku3cKjXLtNyAhv7S8HqusVX1dNHfJ2rHeA6YQWKvauZwYQrkzvbrwCSQCwBok1p7oGo6Rv8n4JGPQ",
  "key5": "WHzpnH5kJMhdtAGzSw5VGZwkM4QmhWnrq9CWV1PHe6UpbNJCCsq27Frzs1J6CfSp1WmKTa5pqYxkSSEWVjjYHoC",
  "key6": "3DQXHeqRrRSwBY69X4B1K3rbuJ79wbhuUXyCqG7CeTzMmFfjYUHeK5sVkkJwrQuA9hAPefRAM9gaHXdGxjQMrxyi",
  "key7": "5W74mPXGJUeCDfwmzFvfVAe3dtBp93XfJDXnmopnxKUnXeae17b7HUFejLBrKZsAGKAbr8Wtcjx618CkYWeoemBG",
  "key8": "4XGQmdxwxqF74ZtftEA9VCVyhdhyio896L8XBboJMPNcoB3Zes8h7mzvW7S1CrgjtcjuF4vPPePwW9xiC6osjeZW",
  "key9": "4c76qRDWGWfgN1HmYgjiR1BJ4nmsH46Daz6rvR848ncNaXbs6XDuHqz2cT55qVNW861Fm1DDf5ta8Cp3aLKkCq6z",
  "key10": "5LB8Dqr5cSrMYJmws7D739xFxkpMX1E8f6pPMDckDwkimb1ZCa1fQ4pfMTjCwb9oNz8f2prGnRoVVKJafMEghK9F",
  "key11": "59GsUooeSWpTKJZRXGHp9rwX4X7TnnQpGeRmXM3qTEdN9JXYtfy1WBbk7TKMCstPnALXY1PQi9CwiWP8FyFvwGPK",
  "key12": "2MJGP13CxBcHEznQEJrxz8b6tf3MioVBqHSpnSHrY5JANaTpdUAHRAGavX1S2qjWE9QNd7JqFbytCFNmN9e4MQU1",
  "key13": "3gf8BBYvw3Kz2nAeWRgvaCREAB3giYw4Dgwa1XxVQK3vdfVWBZdHS8fJYKJZoCDdvxc6KErrKCLiwQduxtHbM2Zx",
  "key14": "2kvixpxjjiRjLP2UNPbxjjG1Hboq6NPxyCBfvZwAzUBZVXMsNbNhPFUQm3yW7jWwZMUzZ9iLwoqMUZWZuDX9JVBf",
  "key15": "64QsaxxsZjGaD6QPVU4Ficz1N4Kh41F8nrnc5mkQ29AQUxfpxBWG3ccsrnBmLnMv5rcuZMazcQrEk1fJBcSR3Qfq",
  "key16": "7vbkue8Z9V93c9XwSaJqyQQz4u3GWSWZvpbCXioZaseEwfzFifc5cdu84vsMuRxogV4WEVMpc6ZoErZ4s5KT45p",
  "key17": "5XYoz7MorPpSKnWrN1KLtkNy85nGDrjrMM2GXD5poVs146PhpVnrjbggmjZ1FdYMyh2x4wV3NFrDx76QgNvzQMmf",
  "key18": "4EihbrJgmETfDr4TNQ4exxSGQMEkKNT92GFVEmK5tf3Dj3MXy9vhYWYNfu9A6Hw5SdcoHpm9PpuJf3Lk6tpoz5ok",
  "key19": "5EVeAcQoR6YQjVxHgZ2iMc97LQ5pKVBVZqJFLv519c7JcRWh4xg3ZSuqDf7cUj47h9ywww4vTfV9CoKRvfixXDxY",
  "key20": "3NEMAfveo7nLBuLku77K5kaFU8xja9dH9wVF9Pd9HtTbATNhmkgJPbPFi4tNRv4HG7HV7xQWKE5Vw7RRwrqx1Mwe",
  "key21": "34V2uTAB8nssD65xxufx3zKppwuSrwDkbzNzoKS8oEGpSvSRuse4sSTBubgaDoJS3nREDRX4Fa7UMM3kN9CGW9ij",
  "key22": "39iu6QwQxvX3Qu3xc5qfSFHkXdiiC4eYs7p7fq7XApVMGR7is5DVon3QC7tRLUBBQr8jaj7F1LdPu1evfbdvE496",
  "key23": "2VDxLirRDZ7r1qVvzjs1axJSCXkgbMWyTFpc9G6PVxcS8ezzjFKyTUp8vq8eszzweGQLG6WpzhskaiDbpbxVxZLc",
  "key24": "vTasZhjQFwWeGMupRcbWZ7EsXtJu1PbeiUTEEjdsrgfnVydcceiTTm9tSeEh2GZDbjeCsMhxpzB6Rmz4ygfBuoQ",
  "key25": "435V6nSHXrRpJqt8T56HmgbctHZM8cJ5WazCvgQkoXL8PtCaoVgtHMVsLRJkijL2Lkt9Fghwzri1YxQBBYEutse1",
  "key26": "5Zw2jz6FhVuGE7GS3XJ6DEnnUsXoBEpR9pmQ6t29u3rzd8P3aNHJShJHXnSfQESXReBcWHZFohXnPeZg9ZTQETGd",
  "key27": "593jyoobS1prPhBMXQwjpX2P2KHcgbReTRrUdEcSPhNhozrokxpDGXMvL8DQ4KccqkuKH8V23BHHHGcnmtckdvwu",
  "key28": "412cHEYk5BgSsyC7o3YcRWTsAYiYZVrVRUPzY3FaUboAt8VyA2XJCpYi59eEvV2kRsvsoSfk7JAVo4MxxNgSeDkK",
  "key29": "22gEsjkDMUUEJWQXpzspP8QY55SgoSPi8eSQPSs8odd2oxDzzK2zZckTYKUgu1Nyqavgq7q2mZEJVNtNW1J4H34g",
  "key30": "38GJqqNUaMiN5PbcYRY13tLzhZhbKczyYuesuUuLgQ8bUxtfjhuRQFCaYDmsBqvQ6RisdFVmeRMWg9mGnd2Vbkys",
  "key31": "3LHy1L8uuwo43Sqeb939HP4W1CPsYW4G4SAyGMQz44Mjbf1zfLi37o8cbw2UeJSmfoWxVuJHMUagwfPj8oRK6YwV",
  "key32": "5S7BMog1j7dvJKVgAXUfQb1sYG7ANgGodbYLMuanwPtJhWSwehz8jfHWMTsVEQw5zmz3PimZeCdk8adg7Vx4MRJu",
  "key33": "FYqLaEJ5GqZgzjGGbmJcjZV3P4Rayhc2prSfTtKrPZZ5Ymjirc2nQqRZyakECzx7pbJnYbpNJ3HhoLeh7Fze4zG",
  "key34": "4WEj2F1ogExx6pZnHPbDsYC3aqgKYXVpUinsvpBHcTPiDsX5ywdtW8UZ6pU1JBXBcLuTMigE2dLBGYDi3DHfXKhj",
  "key35": "634vnofz5qQEG4J9XradpWttzbadqWtXAqeCsNtvpjVk5krJfBTf2Hm3WLYL1UFn4is2zzdFTfqckW8Sqn45MeUE",
  "key36": "4ivUKJQmhetUVr4T1BLeogqEqQtSuYZE4RVJvHB4BdK39NzKezFJMRAekZRwsUMdsDgLwSTQ36UWULSP2G4iAB2d"
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
