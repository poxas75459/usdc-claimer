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
    "2yqXLqqGxUJzo3DsuzNxs9WbMHPN56t9GnoDCUfLbuc7ttj9v25WpTSYciBCMvzBz6rDsPc8K6VjEqSxrjwEcGww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zswUY8BkFEVmfLvV1cKyPSDZAevQdMHaCjyw7gwqvdvuaEJJTsHksUu6UY2qSbzf8LGkCPU68VBzE8bcG22m2xe",
  "key1": "43cqTXiTAG1BNXMbLiRQ5cfufTQUAwDqtvbTa3y3uPdi2Zj8hL3CydQ1p1bq2psSyH5Kwdbo5s2fX6DyXkFrAHDV",
  "key2": "2THHtSMmQ9Psn6MDJS54ETMe6owncENZSgmaKCGpiiv2NBhZ1L6pC75KzDuDC7XnP56DgkNhku99a1p6UgXTbSBt",
  "key3": "2BMSLyXmraxgJ2i6tFnvJDgameuohd8Jo22SsbWQF5GQYr8boHJAET1PNytUoauyxbTWDeuHCqvqTe4AvK5sarXX",
  "key4": "22tn1r7WD9wqJUY58D1Akqxg4poESqrp8hWvxHsovVX4zWy1QdkLfRkt8h1ymmQYquNdst1XzJAMpe5AnBuqudNS",
  "key5": "3x63E67cN5ray883Cn3p4U2CqGbWTPpaumtwdjEk6PEVpEc712Z4d2K5X7rZoRxtXPP3LqFpFadR2XWTrV4Y71RK",
  "key6": "5kVGhGcfnA2TTM2mMU1JENdycrTLfwwuJNPFXCSeFS1qDRWbiBCBcYLiJu6rxznmE6uN6TPmzcXJqCnpAXPz26y3",
  "key7": "5zXzWCzbu2W2qPHKyGrDHsV3eowJuD64cE571BhLycYpKaBNALcKhL8UNWKawqRJvq367rfGYAK19tFvY4JKG9re",
  "key8": "jQLqehWFeTztLexf7cEN5mLXoRFdMNGMe1AurRwiwtkUHtUS5DJanjX3wsGbb1dFdcVCT8YvsGWK8XvCgA5KiJ2",
  "key9": "5vsQDbQ1dsBEhWtDmPB9YSQP7NRLTAAZ63MZa9iJDN24yFc1gauVNnmkpkghmjByLr299Hi2DH4L9TYuxgRkt7rq",
  "key10": "3RPvaX35HAfQ87gnuujmVhhEUH6ErMpeFa7xELp5TmCeADwGbqkpo3u8Jfs1VhTN7aUkuA8xLSRio4sUWzxUkLei",
  "key11": "eeeJB2z6NPViEosBZMGfn1c6inDBLqVQtVtj5jw6rJtq9pusGcKD2wg3Aov1XsLQ3zD3TnJZFu5XujsyxsMkg6A",
  "key12": "3KspQugXCZZ2C8oUaXy4CiyXLSzw9LPRRQJUYd9eZ7psbtJ6G1GumW7uqEcGSx2s6cnNVBwXqatVJemXp2eowHZP",
  "key13": "5MMPTy3jzMjn7VjEFdyVJm7CdcNxvsobz6Xe9uwQc3RArDuV41SRbv5cAjeuv3KUFCMsWBUxhBKmUAztY6CDfdLw",
  "key14": "37nUCN4vbECr94uBwF1h23m1WKUNSyEThtv2cWWX7czMtj5yecH11SerqYHvd9R9BtPg71hCgxLRdHgPS3YF7EKc",
  "key15": "2R9zkhrVkgtsGXqHZkMfZARHbQ5nwsfXVm2eh2wY4huspALKDxNewLAiaPHDej56ELi98i1XTXHnYjfXEy1p58SM",
  "key16": "57iVTyHbvaUvKkA768sHPvZnEQwvzVmxSNPGQbfVyKmVdXnMmqo1tMeQr4wgRzbkLHTphAZ9KWY8Ba1JW31oRGdk",
  "key17": "3mH6FkWupGqP6pzZGJLYFax2FvBgK6U6oKkgN22YnfdsWs6zKynQGJsfrzK3Esz1V1gvop6fVHnuRqE329zDbhkk",
  "key18": "4HegMudoNXDPzPVVKwh6mta8L8eLp94FknPKWMXchTAzYVbwuYH5wFsV4U5E8bhPHarPBczPAfhW5P4pkexxhsMt",
  "key19": "2GC4UGUxydx9HhuZsAPCftoQN6NU8zMb7ZqSLRSPVnu55jf6MwSUuZ3pUY3FW8HcYvNSeZXBdEmBxUcgmPNidtV8",
  "key20": "59PmtpVC5avnX9wpmPxFAkAHw7wshVJnVwoD4eW12YUp5s8sQA1yq8xqFnkj1RoDb7uDrSaqmat8iVMiPVxWLgDt",
  "key21": "4FprgtKSuKtvpDGz7cC5caraWamFUGb3oTSYEUfwcHCVyhvkwA4JpnE1wPJ37uNBbqrUo8SGrSADr2qj99ddKqXa",
  "key22": "2kcJ59WjTu8Gop5acunEUv96HsRyqVKzx3VG8xHWPu2D2KaZxE8eGHsjiqDCroeGMGT1fD49SNvxr47cACbsyuZm",
  "key23": "4REevsyXYRJnG4ev4RUhdvcMoUNzBBVLAsroYXMhZME6Mt3pLeKmDEDG2yNHfiFij1DMBgZwgoBztYYfppW8L1L7",
  "key24": "NCJgB8zn54gVLQrWDFRQeZNnqVN9PKRsPN2YHCupafWHj8AV1NVFshqLfcYvxJ46BBZoNcrF52xRBLWTrckKdTm",
  "key25": "UZ9xUHyi8iReWfvSbSsZQ9xd4njjbCbCpeJpMG42chZ3rNKZ1o4AGd9qzdSH4iGDTkr2VhQxzs8PrATduiBKThM",
  "key26": "5sgGnBgiaurbkKRuTv1Kpov4uHSZEJcxWgPLcfLNXhgcbzMLPka1fHbPs2oK1uAHxgXpCNcCLxWk7FBcRfJhxDQy",
  "key27": "5E6DiFu4cdaFFPEB2wLppRjhh6XGPgT1n2GhPmenJWX4u6aQ1g3sXLF7QXnRGYrwykFthdU6RucLEpi52LmBhx2v",
  "key28": "2FJsLDFs5fTXkycHfScjwmtLH85sr718sWiJMDGiPXg2RkCxdwEnTURBFR4Dt2sMcWEdLWKSkZdPrWKFgsYtRQp2",
  "key29": "2RpUrzsdAEcSj44Qnz58dxEd3Pkhuc23vUYdwjbSiqrc3DeeMPc7PtaqoVgbj6g3dg5paNCzHg4GPucwTaYEAcfb",
  "key30": "5J6NUZsf8Gc2ULD89j5Demt14seCQws8CGZyVE6bUJDBUZFN4H6Pye8jvLtGsF2Mazvqy7mV9WSyFfKq36fGioVV",
  "key31": "2kdgdzDCtNs6mmQUwLpLMcsMu3pdD2m6XA7caQrTnycUWk2wRdW4H3Qi54uk1oDiAfPArxsDbNkuC2ta7xQyupcd",
  "key32": "5puLPZzJbFV18ZsCc2zBcTgvtMyfWeSfyA2xwz85ijw3hSEREdw4UhVKfwmHuNmg8uEDBTDFp1wf1g4iKgLmvEEG",
  "key33": "4mbgTLbHokps3Z8i2maxHytMXbkY8UHTYtGJqep6W3oMp52ctpvtXeut2EikrWdt4chZtMZf1qMsnA2iDm1zYZU8"
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
