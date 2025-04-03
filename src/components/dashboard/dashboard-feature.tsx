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
    "283xMGijWhvdphq9a9r9o2sxvPvsr8Wr7V1SvkvqhiuS8fRBmv4YUrAdUTBdbXgEezifC5uegttLXQ9NqomRua2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4veguMMKWWN3vqifbzdEmTHq7kzjsqUpSx3XnBoWcrv1KzaT7Hbus458mnmJq6p2nkzQ8ppfCmzdZTP6gpSXcJ9C",
  "key1": "ifUswLaSgdKn4MbAsMnSsfugTE2peN6H3bXMQuQq7eogSRCVXezSfNf3LWBjgyv1xz9iR57RDMV4eA4Q1PqNY6m",
  "key2": "5CHKdhLCVDuP2EGiW11aZPqM1jAjHJEpCCSDMvAmRRQhGXHRmqrqHZnJnoqx3j6n89VAoAMhnNtF45N2VDwgp3P9",
  "key3": "3wFyUGyLSFgafJspgDLYQGnRWPExV9KLtdV1rpgHrD5bEa1uH7X4sVjuyUUZApDYyb58DRBEbkihjvpRYhZpJhzQ",
  "key4": "9bG77pHQFVi3JM2z1MsCNDAEEXoxTq2rxVEk47r3981xwtbXscVtdkzRZAjyUcRjsvfLB81r1fooubosPcrmc1J",
  "key5": "5TYKfuu7s1ZcAGypiGbeSKEuB4GpsWTEBkSeRrq8predQHvnoyDyHPE2ChYeCn8cmTdoRPAFceej8yujgNB1KS6p",
  "key6": "56kfjGW75sdbY14qTmqzmXm3notMqrqrPxEC7cyn4hXkYukYvN4jysWDvUamkY85wUT1bpn2azrzDpqVJh9Z6TLv",
  "key7": "5MtMv5muULLtybBY9dD34Mu6jPmFaNPqEQs2NKcnsXU53pGqR25EUhzLT3B7ai5nYG3SLWLJUagagaqQX9xbuNmR",
  "key8": "WZYyWLgQHzqR8vd7HjHzGuGsK1XLaJzvr2AHP39QW9YLpu5JK1i9euL1ayGkN57XR4xUXpuKFfQQj1nzTeqNKNo",
  "key9": "4F9dGsLsUMb7mY8GKPjNzGR39KLKDWGmf9YUyXVkng3rS7F1jELhkYhreiT5Yk77q8z8rPoapA7Ry6yhvJj3xRZf",
  "key10": "5iAs3yhvvueRpHWQxGdo7U1ATfjvSrqhr1NMpKdqZGq34HehMdxZCN6Td8wRheop4zLbxbFSej1C13omLEQqWgpa",
  "key11": "65Pm6sgHK6fjZ36kVEUAysyRCTCL2V3nM9r7cNcnTmg9GoNoPyyHqJ2djU17gd8cokyw1P4pN2yfefgz1h8eBXbF",
  "key12": "Dz1MkcdBWxWMznxp3tFiArezzmKtxw716Kp2qydaS7a93yJHLNYgZd6Xx5eZAP7sCAnxsXkvzEEt99fCF4mnsHn",
  "key13": "2kqE2XbdnU55AEct1F2uDNtkXDcKQm2WK66hoHzF8swuYeRv7W3GvGnfxf6zrvaer8mgcoQami5kzQftnuefAwNB",
  "key14": "5M7ZSCikXyCMt1q45U5ZnicnNveMPxAyJTmKjqAyHPA8CSW49gved4PNd8gMnijqbqQnKsFeaGMjQkNEXPQ9dpk4",
  "key15": "2GZTLoPDDusxNNWFBSZ1QuxiJiApU2yqhohhu4k8LRt3nJYSCqMu1WYKdnpt6MwX6C9JkECwXEdJdgXy5CDbaxcz",
  "key16": "12q58LhrRZoEipqLgKRojz1miwiQgG6Pf5jQNEpzkTdNWuiHsRRR6xStweBfdiE9ebXDXuKqX7ZohAid45gTXvM",
  "key17": "4cZAPTxK4bsWbV81mXSMS1ABAzPVyyCyMxL8nJfoFRr6yuVuufTgX8TovBtYaij53zDupZaodauJ95gXwqZyjwkF",
  "key18": "29DFhUgw77HHHK2NtPUjbzfVvEzY4WSKogNdoxFYKtprHT42cnv9r4BSGkqcCTEEt864dpEULz3sdXi5N58rhPBw",
  "key19": "2mWce3br1fBisUtQ4Rezu3cEqLUPoyV1gmk2Xw3uN4c5BxrxSnagTRY5pPhRJ8LEz9rbRj8JxJ7M38kV4zka48bs",
  "key20": "4GJpGizEZYxvyFQDr7uDiJTBPUmVbRdnQWBPNmu4utbGH2xMN671w7bYtF8R4jyzDDxdADMkVZc9yFNnSr8hPra6",
  "key21": "5PvhsAz7bSxHPgGq5aNFm83YV1KM1YdjLiBSVerYH98p7iGyhs6LksKwZzmDNoXiToHWSPbkuZjRjbvLhzY1U93P",
  "key22": "vqJdFgLNeBA4Z42EUbLbdeXxTXTnktaddtkwZUvCupRpAHEBkGr5teKvqHM4Fq8k47qYuDrGo3haL5Fh4exZzcH",
  "key23": "3L2bsQqTS7eBVdHVBmtisVpf74n5MjpkLHoXi39wgxTwLhgSPr9VVmn3Z86BUUAfK1aJrJY6cHsUk1VHZtGY6bYW",
  "key24": "4AFXHkRiQ4WAGcEwqXjCpfUXXKWArAygoART9cyVkYJk9FNRMwdnVADAG36CkqaYVvts9mHm3mHGpGLbRS2LUrrQ",
  "key25": "ZtbpkQfdQk8JU27SJpoxfeP3xsMKei3Y5F7oDzgxtCaFvKTAzrxHUtf21oii6UmAX2vbJrocqbq1k1jCtSXzmR6",
  "key26": "2V7ig5DpXwWsKyLu6fPj8GWQJdgSa6tDMccd3AvnQMjcZNd9FTURaLFYR1tqxnWMZxCo1ufEmV1DrYdcNWPRGgTh",
  "key27": "SMZF4Qo4sL73jJCPr39Mr9Y4JEYHim7YKXtAgXckQ1sfoHRpZDQbRiADUpRcazjAqKe2z1paJ2XrsYjqCUM3zYe",
  "key28": "357mU6Bo1LNNuv69Cknqz5kAsm93ZxuLUXD3vCHuegpYkm3uUD9ExNJhsrz3DPaXUDwfjNU5FUgKBFDzo1aFAyoz",
  "key29": "3sNKimjPHF9hSWcNK3Rxb83roEZZC67SLvZCAatFnhvDLXxs3F7ViKv3Zt315DMHePtLLk7AUkMjKyLwbhxFZv5V",
  "key30": "2JPcRnwmRvNgYM9pyZbUb6GFBE4iMP8AHH57Vc34ex8CZLhEF7nqKVmutugYZ4kjYYp6Xu1SXDtsGn3VsZH43ymg",
  "key31": "3YqbLmo75Tr3kwKwkAkG5P6LtKYDZz8TUs8uz1jj4JF43f8cmMamLwQHZoJrCkd4Y6KPZhm1PpE5XHfxGDgSLM8f",
  "key32": "5zVzasNDFEV9fdVTXGruUeLob5FuGoqL61ngjTrTEAqitk496EhSGFEid4zVPnKBun6qmszWfZBc2rEP4et1Kui7",
  "key33": "4bvyiEJ2ZKUW6m9UeTDUNpu8y5EkGczU1xK9qTziw6gDpKLBttaMNzhzy5s3YgxWN2Bz1y9QnRmNZJeaJm1HVsyU",
  "key34": "25Uxi2G2QVaSUiocZhNa9AQtvJ98D15KwdD1zaLCJpcGuzgzG8FW44tYGWMBEw5qNtdxA1zguLp8B17vZo3DVn52",
  "key35": "5EgWMbFhgLoa1mw4eXr57YZGsMDFXQdBkDY7ypPmb85fiSCDRB8eochHnFHrbADaa2cDzabmYJnk3aWSPEFY8pqz",
  "key36": "5WTWbvtSTnJvTr3FTDrvTgoRDoWtucYUafSuAuUHSmG1uuAM72tcF8S9iedPMYAW1U4eCM3jZj28uJCu6A5qPEYb",
  "key37": "3ZRE6FuT5jAjAX82MpEro8yk2CECoYN9159RjrELb3kbY5gW5RfCvhEq4VGqhtjcdkyNrpgsx9h6M1zhKTgaVXsp",
  "key38": "eAoiwbF2uANkjeXBKKQZsSsaTuUeEVN7n8Uqo1GjDTV6hBX3yzD8fbajcp5YPnv2sxcYqJor3172jwHEwKTjPA5",
  "key39": "674MgbmD7jhCBjgMf6fbFYyHnNaMZz3wDFPU98Jd34csJpQGrqS1HKfdcgCvyQ8cVYX8kifRHVqr44GGLov5TBHo"
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
