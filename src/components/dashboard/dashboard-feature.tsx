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
    "67DbrP54e8PJAkuQue7Jea4qvHNgqUFDFAaVuQQ8wP7NHjvtXNUe8r6ZHKCTeF8khwwj1hhJUaeeVcePWmFnCyPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38TRbsFRPXbFRZamRERpZspgcwSN4HLeiJZi2ycTLeWBsJjm2TVJhJ3QQSCnumurTfPJ6qRNXmwegaNURJpiAKW8",
  "key1": "PD4fsxi3XZPLzybWZhGFJXHie7EzrvfL7nbm3pGC91JgJbBNAjwKpHC1L8gHPKM3vBC9SHbfkrvDeDY3HyGSzmZ",
  "key2": "5iDU2ArZNYGispzVuLWrmL9ejbBsVcKypjeEqqzppnp7Hdwc7u2nH6pm9jMGWdEQt4dc3Mw6x1XaW6ebEqjTPtyM",
  "key3": "3LARVdSUQtcosQMVBku7JSxexdQ2KKVVmgaRhdFgfQ9qUthxo521C43nNgfHBx9EL7znw2AbtAwHbAD8fx7e7E1G",
  "key4": "4Lipr8siFdk3hFhKWDKGjss1WhxfqvPk22xuQMVHxRZQMrubmtsoHmdR1dufTxyo1N1BtUwGABEHVQc45qtdotmu",
  "key5": "2wtQTJBiwqirbaoJyrTRLW97R5fpKQhsXSy6NpDZW3afskE6ewzbGznakuYWZr2GHuP3MeaUtvuChRAjEcsYqw5U",
  "key6": "2ASW1nasdfBAQet7HhEULfkjCARCnUVfqRABvCvNmiFDjjqiMowA2MNkwL3wynPSjYTumxaFCP22vLP8QQ5wydHZ",
  "key7": "24spyFSqbfp7g1jzdc6uy4Q1d6mtGGfGdmU2w2WHmTKh1uyJsez1XdgVsdeRFmpYy3mmJbfP7g6jrXMchEGdW57e",
  "key8": "2qopB4USHsgQQkUDxEHUpzm5YaA1oWxsQhJEsUb98z1YaCvhrVafHRL4gtUxSfKGs9b5j1sFwqywo9D79XB3jJxh",
  "key9": "3rRi4VDUtXfBkb5ZUQgPYr1cmCSRSShLNxiVpyuXfenHaCvmzfo4Xak1vrMLLy6qFeypPS9mM6g6kjNN9sTSL5Gy",
  "key10": "4uaBhhBsCtLHZsZqGKKUEDGCMqJKxADrqoLN7tgaYuwKDg4QLQURnTpaJcAASRG7AHCNMkL4XNFfCpCEhCAxVTPo",
  "key11": "22XNQJpGKqpNwUm5Xht1rAqaerws4MsSyCTT6SGW3muuVtsyT7btB3FfTgwj8BPPpj7SuGUpBn16fMWAGz7JgxA1",
  "key12": "2CbwdohwTaoYGpQ3osjfyxr3fQ6hxLgv9JHzbAq1JQnmGFryYYGj8TWuskz3qZqQ2Y6MScHDLdGXviHPTQJ9CGnt",
  "key13": "2mNWhRBYx9KUPKWUP5Wqdn8VDbRWpUuMphthz9rnhpmpqYyBTYeVAEKNapEqQyLhB274A3TrW5zpSrTZpkSA8zCU",
  "key14": "31xbrfN1iY7D6E7QjUfXZJiEVTKAgNPVbSRuXgGK2WRRYxFDq9o9UrmHtrmHwx9AZGsm7JKDvyyLhJu4b1js2yNk",
  "key15": "EknrgiVqezFBMFPhEz3scUGC4qUqEVwQUPkMRMrtZFBDaUtbb4paWoeLbUoPhvh2g2ySpkR1Jf5AwPjMvUWcVK5",
  "key16": "SaF49viQsvtuH8y97rW4qAN4LHAEUcJyy8FGTuS4WUYuVQVu1RcUGfQUue1dYW4PyZbwcYwu4Yi9fWxBCBpu1D8",
  "key17": "222Yj4TJSGB2iTsJKP5K27oQudCuEzy5U6eYeHmbQu7GK5WQ7Z5UteHK4xiR5suxaTKhshJjBanuxJhPz9Tv7qwE",
  "key18": "45xHTYmBrCsPvPvtEAgVy23H4bYZwkhSxawoRK2oNPWG1JenSW4okA3g1bn5Ku8LupfbQT3cGabBwXjKZtGdjhXd",
  "key19": "3mRrLXXMCm5cGER5MkmsbMWWMzGUWWw8tQC3aA93agbCV31aWqXjPgyJpXNBWVkLZKgE1A6R1yhshhW6qncyNUFN",
  "key20": "32dzM79rH6GymXFKw1KbKgM2swiTQz5Yio5qPtY1rMWFTkBUDJBYePBA3SPVL82nuMSN4ND7NFSXbZirhdEFgfRW",
  "key21": "6367dSPt9fm3dWRarNDCB64htB3xabCN6KUob9CvYjUwz87jXijUGGebe3FzMqKNL1UaXFcenSivGznRXArN6Lw8",
  "key22": "5kcnb8n9YSfEU6ARxdgChRsTEedVuyMdx61f7jDzC7DJdDd3hkdtiSY46pb6Vqhz7wDbpwJENc6Mxo4JTs2kdH5N",
  "key23": "4drBFVAN1XHpUQ2GaTD5Mp2K3HZbbFsajKr67gW8zskeupwsyWz9xNtPddHcvdRqYCH8ttKgisysSan1mCat8P8Z",
  "key24": "29FEV37M4NHnEKbBKxc1pnZ4Fp4L12WXVUgJX9qU1JDTttRMoLzwJE8bjPJFjxGovGpK6XtjEUPHv2XEECPTqNmh",
  "key25": "4bBvU2v6YQ7C64hS1wUf664qu6cWEyLyNwmafGg4tVvAtH4CmUcXWJVk9cBr24iDaCk3vtfcuaYaJV2J8Vmx5dk6",
  "key26": "56kF9F6P2GVFrqcLpBkK7yEezGnzg5Tga9zyWJx9j3W4CmanYzS7r18EVg1wqNqzmNxerujVdrdkj64q3eR1jQUE",
  "key27": "53T5MioHP7NVN2V1rD8SXW16DxLV8pETQgZ4DtAw2qooHWRvmxZ1aDu2xQCBqKcsUvVQmbpXpw4BsPUybLGahVJx",
  "key28": "zKBheQqnSG4ty8EXz9vPv9hkAx94MozsfSc34Y28vbiAVDHWQUPS1qhzVUWc95LmPCVGmLpwzUJzwTFtaYtpoJm",
  "key29": "5nQSxAsQWFNCc8kH4GKLvu6wLqgQaQhaBzGYwx31QPbxNDLGqZRRTqKRcAk1J7b4cLSmBQxKkAHmgkuTtcjigqEC",
  "key30": "5qvQb25pD2gEvUpF4pRCLSQbbB2geA6dPYQHpBWPbbLR82qnSdEPYQL6NTytqZxxJD5uVZTsZ3gC5tU3a645EDwZ",
  "key31": "29KuTbJTjHAbWkWkSGz6t6sJB4hVFAmnKK4qd7ceFFppdWbpsuV1HVjpMD1QRwmVTvxryGdp4oK276D3aNCoXQ7r",
  "key32": "dpk23VzwF51zBREF3qhpAcu7gAaDcyuPyvrwaHMxLjsCCZEQ69v1Mu26chQhK7am1wzUA4HDxtyPX65fggzpZk1",
  "key33": "2t2m46wCKJGuzaMNNnUG11jbJ68QDRPfHCLMJtG9r5XGZ4Z8M3G9415C9fxESpRv96tPDU2ZJSzN7ftysZ8wjBSW",
  "key34": "3Yu1VfhAmHegvzqtNnyHd1i8fit3RX2ikVHQFFAuNydPLLEazALrcFPyxcR2z7roEbGvGatWScpj54GBbzYYz5g8",
  "key35": "55DnL98qtjDQP3dP6Wn2Dnuy45rnGiJ4dDAjT9GKPEFMpStk2HuUEs1RhYyaRKNRmxrXqQFxYCqYJHDtT1XdaKFS",
  "key36": "dznf9a1kAR4WhgCzjrb3Zs9WwcSuBojH8cLKWxiGZCdGAV78LHd6hoGiuxyV4hk772dJGkgwUWFo11LbdBQ7nNS",
  "key37": "Nx3DEaHCTjVGQQGtN7N8GJphJrWziZnuyoaNndAWCB25RwaLNC3eVCXdFRVL4j9chdegjcvYmM2ECfnkrFofhts"
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
