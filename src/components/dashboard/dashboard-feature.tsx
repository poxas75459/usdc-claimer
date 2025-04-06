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
    "2AXzV38oQsiWK5n9kmFKPvvF9t11GT8FeroaLAgmfC5qn8DnG7XC1jTpwzLvieo4kJka9r7dv4QMgRoCNESafXEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hp6sqCJFFp3nYC6yeL5B98xQKPxoSsftFP6GNvGD1MUxVVCoPJr44osz6jwiEcxCbifDvSqQXLoJd1vjmEXWGvf",
  "key1": "3kkt6X2o2Uca3mgeP4znGx9AxrRdVgsyShTMAZoyEurnpZeRNCPbH1oXyGs79br4cE4n5vsNxUuCj4h4qUhKetu4",
  "key2": "5sYE4VX6sCMm4hz7pHCby4ALUFFkAwEVxGDn3VppxzP8E8Xrj9AwK1J51Rgt96pAdtGZJaxz1M3wdDYLf6tGLgPR",
  "key3": "2nn37iSMcPz4SKKeJwjc7ALKqDX1vtjVo49LDAH3xQmbNxAnHkoZRhswaPYjvJnCroetzbVMfjZJQs7NNyjJ7EQ6",
  "key4": "2YpmBXstTgQkR7RB6BByy6ZakxG3m3XJVY2ZYFgStN9tBpwVddwrgsWgfLS612rCXxKcq5ggzyNxUbVnzVrq2iTz",
  "key5": "2jd8rjZ8yK47c8WETicnHw3MBGA3m57v1MzJ1KopweaA25pbjWUTBEAHYzVbPTTQhpGXWNGQM515UGSzNvJz2VNc",
  "key6": "4BpKdS5gByrS6ANmxhXSSCwmoNQbAaDQE2pocjofdDMfYjZdjkkYTfmhFdH4UTdMm84aZp5CK6ZCFU83Z2BGpTpV",
  "key7": "44PCF6ULTbVXXLJTfN3xeRdobDhQTT8PVeQLddP8HJWUoj5spV6hLQyHtmJeEQYFbPR2N59S7xhfxVTeLk2WmfGq",
  "key8": "j6BjbAGw53AQrapSq3dd89M4a6V3pgX4AWoAjtmprjVJW7bkv5ko78ZTpvuzTLWKGDAyjJkjp4V6QnLs6X2LAtG",
  "key9": "3aJLmGHw4i6k2FLV7FMzr7h7u9k2XMRXEwMfi21n2LYySTs89caVGSWuhYfjR6PiC9881mF7czatzpi8yRoxUU9R",
  "key10": "215TysYiMmqmRpTPWKJDHDjaQt2p6WxQ2PrezS5xcSJRk5v8cz4nSFSaBUEdwi1a33W9Fx7dy2nnguMwkozQaXwr",
  "key11": "3zcw9wqZokXJwfy32twfXCzxeZP3nMqkHPPbUSknfMbiFTmqiVnfKohfmTQDnsNpf4cC3S5bS6UkcKAVAa7mff9o",
  "key12": "3CNnSgzC31CcbvinrWAjVaQV6D32LenELaXGgZ9ZzW8fbALaSyzvuwKk8djvV3rcXT4VZQ4Wf2uuxxXDFPue6mP1",
  "key13": "5nvKgHFdoExXBZYMxt31M1BR5u8b5uougiZMuCHWnYaEUwtMot8RH5J18goCqrJMWw7CtTuQMkEf2kQ5EMdNA4kB",
  "key14": "5uhPNdkB4mTDwYBLt2nitihpkWB9qmUN5sfEbQEe5ttBcaerWQdZ83dmhcASdQHsKq2tr1VoEctTuiBYjsoXCzft",
  "key15": "37jXWYE525AGLHbxfamn3uz4z4oGqMdCp7wD62Ry2UMXFTQkgC7YLikmxAzaStDaLPVZyi1P1uUTiQpaeP8z73rb",
  "key16": "4ZFuxUTmJ7WaGEq1xh3uiVaiHZhvGc6CATrehAAbkpzpu5FgVpG2y34MGogykvhvwMusUiPs4FyNVJYV5fJJhTLr",
  "key17": "sLAD6K5sjoqhJDXyc8mVPq8bXFkqiF2inYwi1ZsdzaMeTtxXVY6BretgJACQbuWa3maMgVQ39k4iqN1LKEgFbAo",
  "key18": "3gkUoSV2MUMzGhFBjh6hMcWSrNzNnuv8XKTtsCgoT3LK7FuySYyxvssmPrCr3nDJEE92hNq42pxqQiT2Tmvdzb6j",
  "key19": "XgiGvPRDT3uEpxxo7ZaiayBe1RibMwwuQkSkg6vrf7ZR7uKCJse6YhhneCRqfAnn27zCWoRvNsV5TcLFiVprG86",
  "key20": "5Y1fQAXi4ppYYGX5XQcCFLg1Td8UQhcSA2eARBx6r9RURYDk7MJrBvpwUHmHUVciBSFFUZZbjXwbQAMtnW3zSExU",
  "key21": "3GaevKjxNkEXPT8H1So4jf3zKFibfZiibxwnFxNkBvDRGf5GAGMEwfti79ntmGbNWPrQD72ENHeupKkydXWtKWEB",
  "key22": "2vndHYUzqwKWkvKSoD8j2XPqmqXcgzgQjr42qdmhydz2AWMt9aqoBcT5hUXEJ7tYEMp5tbmuuKaL9LhJTkx4A8Tq",
  "key23": "4rnR8vbMXMMyV7dvDweSRJsG9ubze3gPkHEbY2RVFDNAEnEqP6iBSPV97tMiCCPZV4wXGa6SZRj5YhHBZwHMYPtt",
  "key24": "4ywGic5iWi1f5sNQkeuzCYF9kntaJqw4w2coW2A1nR5Hr7z1E1xWQ7gKBS5i3yiMMPMiXCV7QTa1JnJNFnApepSF",
  "key25": "4oJvEmA35HUFWYrD3HJy2rQuEyDZDEdUpxTC1mKJmEcYLasKRQvzC6UZCxrHzwXCGV2M2c5Ju7QwZQnKB4t7hgjj",
  "key26": "2UhVttxFp1oQuanUC4MdxxF621nKTDYzuWwtZRMesdLRxx9w185vaoi2Ta6FvP9Pj4NG8XLEuC5qLyG6SKL1XvFP",
  "key27": "5bKWVQYQ3FkEpKuus8Y6M94CEnMoMCWG3U2LK7hzVpjp7tUvVdfHy6vQ6TsxYL9G6tpGnCj2LoLRXaNZargfzjth",
  "key28": "xi3ZKFn4DktjxQtKR9zryMdYTpx6fSZST7GT7ph6xqdswkoghUUJ33DW7Jm7qV37niKZJg2af8vxS5SYJ132E3E",
  "key29": "2TXGfc8ThnzbJjY7s5fEawGkFHgNeXqWCfQ8fgLgHrKDwtzFw32M1Eej9dTcHxoGrbHXeBk4Ngh4M6CfdPnxJb38",
  "key30": "rSTxGEJkSGeXBzLQWShcMLFxwRbToa7v9eZz5F2eMEy8UKBKSTuL7sUmhMQwvmpeHHmnzUJ7EKn68uy831hX72D",
  "key31": "4ocUT1ba6BEkBTSYYLAqmPkENZKAXa56ZTfqsyD6PAMTLDVJEJEC43k11ubrBAXtHExCD3M6Q7cu3RBfZfRJc2fH",
  "key32": "XHweuZjegxuDQQYMsFzyFofSZcuzbA7x7Wap2cAV82NYysM2ZPWajbboZrpHr25d7jaB69qqF6b1i3uGCzmr3xs",
  "key33": "3eVzCRg76CPkocctams1yBSz4s2Zks4wqrqrFkwy6x2q7XUP8Q1UpVjiwGBBLpKs2W3btV9VPxpFtqWiBHyKejEk",
  "key34": "HDsZFUt3CkykfPPhy1uvKwEQ1axtMPFKnGuGaRrRkoR4F4bYV4re3quxtJd9X2mP4iHTN2amG2FMntQAGVLNEtG",
  "key35": "2ACcf4BY1oNy5FjbvSW2f9LX4nxFoRSeHLjiRo4fSaTx7BA9H9Bp84dnnrwHuEQTHym8FhC9gqwPoVMtR6k927wd",
  "key36": "2kEkWbLLSyZ5UZzQQe71bweyXBZWbXnXPn3JoZ2R8xVvcZYjQ2zSDkBrMaHeAm88WPvixM43Ri5odyRuCW2Zeaw4"
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
