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
    "3f3Lp35JCfvTFNUdzChKeZ4Zxype6b2CfztUsK2QLm9VyCtof4NxQRhLumYfkD8Wx399qhGtBrhz9JKCjnKnoEZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nPvvGbZPhataec5eWv92ymsSBFXM9EHpqPehw3yN1QwkAYbJagxz4AhxH6NdokJsNdohacZP3z64PvyxmCSVmKY",
  "key1": "oPWqoL24SJWD2GM2sonciCnGa97dxS3rwfwLjzaRbM4nMF6KWURXXA1dxMxxgwsexERo8sJsMTdxTNWe7oArEUR",
  "key2": "FFDRuug2ANbQFQMQs9qVoW4tc6KSwzmHwUDEHqGyyxKtaU3Jbw5VQrW4T1xbksBNnsYkLnWcpyBHqJk26qTY1XF",
  "key3": "4tjJYPVpQ7xt1wQW1CgDGo1bbGRZij2kgjVqzcU8hRGG6PG3W4em9LJyjD5oSydMpqBSA6j7FpHdKzhvFfc4AcSd",
  "key4": "4K9c75RYGexVkcnS7Y2WyJYrJtMwDUDvpDrEj4mhWEE4k68A7imECyZ9f9mph6J8hcXBpfsCFsau5UCFQ9RyA2Tz",
  "key5": "547eJH9mtPX4WCB9kZuSmLLbajECyDffUNERAPQRQxTQPs9sWn2635jiMBdob91ZAufuBKNWD9ZtG8MAQG74kcxs",
  "key6": "4HwcXhB8tRURGmXivTCLmEE2SiXNWaqQ9FfR3H6MqKTGyN4WxBzkNmjg5iAA7tCaQwc3u8gtKcRc9izHdY3o4e1b",
  "key7": "3SEzwi3HncK9DeKJQzbpq8DCGhLqVcbgBw9pti2N5N4JZM2gWxWcgysWTLR9o4rjzVCijgfWBfYJrcRKh7nC4VPw",
  "key8": "4C1WCggB2qVZ4RovGJukfPS2feKtrUbpJ7taTTqvY8WkcFccBfPfVYG6e5EALm7pEc76jpiPXZ1zhcf7ZRZoQvA1",
  "key9": "33wZHgTzN5TLwPimWysgEZAcMQ1Vfh2mUEkXYKcss4VaeUac5gThBEQ3MfSwPiqDt6zcsWQ9DGut2F5AUatVtUr5",
  "key10": "2yGAAQARvxS7GZghiuMVBeA97WcLVe7WJzKRYKWHptLnZvLwb5xdijvQFArpWntiKnUtxx9D5sY359SyshYdp3Vj",
  "key11": "4mXWeZwVcD35eeWYH2g5VnF7XrqyPpTuf2wVe7gH1RFQGDT8fFGiaXRcf12VnAGhVpKSZ8EuV5HpWbCm6zwtGrke",
  "key12": "4NyQJQFoeyVxB4ivrKzha28qQwESvQKYQ6AjtVu18eax3ESm57HFcadHa2gHDbbwyvv8MAFWaWDQrQTfHfk4BREp",
  "key13": "4fP7RBmYmg5xUBxXH6axi5jRsuF8iWLDSdwgNikU7Ss63T8TUGf7t3J6ScoEjdSEtWbhuTpqMEq7GByMikh6dmhr",
  "key14": "4V88YbXEsc4NvrkJFYV9sBJJkhZQPXZpJmCRKaEiNVeNygDLPdz1TDi8B2KaPQubGuoNTcptJXVki57E5WxmdHKx",
  "key15": "59oPgV3jVXWyRbscKseEFWYwaUMWKQY22piaHH3gY1canT5bRadDJovNHqo9S77WK7TXU31aKtQ9FffC8eUmEGev",
  "key16": "5L7xK37NEp5r8zK99uvpn6xV1qsoBW2YRUSWZALcwEu8bmaenJnu2RPZpkXHU8MTcwju8qk61jQbCqJu6UYrii3D",
  "key17": "3QfZw4c6GHz8F4eASJnrVAjFdc3baawRgkVZzU87jVvk7kEvBj2KdY5JLP1t7AScM8DiZXcrA8vV22fSxnJqzPbe",
  "key18": "PPt6pbAmRLhWNQPHuBqrJqfrwATF2HpXwwBm1DpumWxh8771tpdgZnnapkK3W4ZyUqgPUNn3gY4MkAJvcVtpkWu",
  "key19": "4h7RissqUrAKRBiNsMzWjkew6GUk8d3xMDaUGC8tFEwUHRPrfz7qEHKNZ6RQ8W84Z4HgWGXzR6nRdrSVP8tCN6VX",
  "key20": "5fNzKymX2vGHDAwg1BnCj4ENW6yveVd9UQ6ryuo1M2VjDxQT7J4fBKxp5wEqqAuECNFD9fF6yMuodmG31WXnfENA",
  "key21": "4ygQuKv3hGhPJ81FrVdXmtzko5fCtzvHo48DtmUffGcxWFSXweA5ADLZQwFPM2mEGVXqZ62XP4aKWPpjsBswE3ds",
  "key22": "3LZ2YvddY6oR8JnobUMYLRH7fDFGsg5Pn4E582szje4spZrie22UpCstD8W7ceCyjTNyEeuTVRop98YotBaZYHa3",
  "key23": "vDQezFcnrJvDBJeiVoZ2M2coiuxf6Hronu9813wBXtgnddefVLPbE95snfTuE19HEQ4uF4Gt9scH9bsPbzYYBAV",
  "key24": "5MPt5j1HHb2pgNhmZqL9byXoQDerNGN8wxPwZa99mJ1ncYsp4ZRHPVUV4rVkx2Sk9xmLU4fgnzGAf5Ei3qu6HUQa",
  "key25": "9MYUnvzfPrVwKyVEGu6sHbBfFt5BZNTStg77ySm76FdGawxQdtveLqEDyhi1v5PKroRpSQBHnL4M3EVWH9tvubJ",
  "key26": "2aN6LcSA6Heg9SLTBH8V21sGrivjdSErL85vqDEW1RGzLJfqdLFDfWAmYC1dfHCUxVSCC7dUG1pr2rgU8t2nb9CZ",
  "key27": "2WLmQuA3VW3ZbmouwSmXoDHd2SsVVMsWKB6AGyT9BHrPcQSwMM2nG1PcU3buNSeJv7CF3ARFarFV1ea3SWXVARsh",
  "key28": "uu9n7p6eRMCgzuJdpjqb4guFoXZezWBgoSWpW8FV1mAJfkVLdW6LdEQ25CzJtx9M2LzKpowhne2jtvvcFHgXdKS",
  "key29": "caNwBKKKxfuhwqqK5AtEMQo3SMBn1eCLempvWuWUnySNXaM8Ch8QcGqhwGsmbxBvvz5zN8eUe5bhCkypzepDrTk",
  "key30": "26DCVbw3N5gmekX25fEJq8jUPoHhNsUPk5dXdVdEuvHAN1y32XkeEp2nt8eYRcoSLnWZ8VeKrPFELVjyzTwQ8vRT",
  "key31": "WQ9XeCq2rqKb9mdnzB1eqPvmBWe6WqxpN269fDcv3yvYGqaz3oGe2iimvzbUsu6hvNPxHNLweEexbLkvokySWyj",
  "key32": "hr6EwUrnRqEj5UcAjXcHj2Pu6C9XrrkYpQMaF2dRv37UomvddU7NeeYrijzLv258wVBKKvcJt6G1b6rAdKSri65",
  "key33": "4Lz7cr2q6vejoK5kyrbtSpJ3YCa5aqYhzK1ipaVDbTR52L1oyB2FrtAw7nJjcA3jQZq23HN1DR7ksWbAohtSxQKP",
  "key34": "4GxqT2JFcwcaRA7Au89d4fHJiQ2bJaU4AuvXrG7RKkMTgP6R5dUq7PsUAUHXrkkSHQJvbywhgQYcpbFodKjr7mby",
  "key35": "5YWuyuC5aPTUDWR82Q6aG3T9HLzgbCJejTBApNgo5tt2beXEsgNKcTB8qsy3Xt1jABbzjapi1JrwnQzbDWxmHvaE",
  "key36": "5skKsom8untiRCsptCAJTabAV4ZPGKaHmAP5XZ9RrRy1P1b6pCyvFHiRjAEerW9eeHranHei4Mc37aufL4DJSmoH",
  "key37": "51HvbwdC1gTSSCViCezWbQtWQbPEEth1PXnpKjwMCvjmeQVQSgdCzgovP4nXWvM7hTpuyRoh4G3K4zCwZbHQB6Wd",
  "key38": "2WCA1ZhDRxLRRCBZ4FduWrs8nBBszbskgUtqARznD54i9275SAiwqpc7vkZTJs8Fbh9MJ5cUfaDWaRQGUTJRiFs6",
  "key39": "4vFAy3FDnMJjLcg46zAvohjmvUEpoGXPW7YZgVdbgrXfv7n6H6Jvvc1aPyMjPAaQdY5iSZvTmoHjVgz2WGsQqYLF",
  "key40": "2RMN8MbFSFbMi2oG6xzEr9cdwWmUCX79i9rohGAwX29aRkqRPz9TBFbnrCSdfgwoHM6A7iuYKy3xyCSwhQVm8RuY",
  "key41": "YHmXcX7YcePnT7tKPhcb97p5WcbG9FH72ABXwEpddttyFbVyhPi5AXstmwwtkW7Zt7qybtkNyLiGhKABMTAKrs3",
  "key42": "2iUCuxRMMKSjbkXqnzcyq3tq2nioyL4xbxqArnbpCM1kxFFKVDT344VuckQWo7hjN1bm164qdL5WE9UrYG62PeNX",
  "key43": "37rWuKnTrCXTRkd6yrTUz5FUquzYwtDDu9RReSBmrb76Xrq41EFaJqoPDX3mQv6ky9ZoEZ3oPHi6HHVS98bwF4Wd",
  "key44": "5JkNu1NDvuWUtmULSYYxRt4vy1N9CBrPz5r5waV7uh47Ag7xT4Ut4b7pnZt5Mybh4WDNkMC6bQF6Si7geDk4ZkBg",
  "key45": "3F1WZiJEU8bkSu8HSScK7VUk1WzAmM4MMcMKFJCbugACSVzfmfybTU5LnGYfuQHXbdZ8fVWaiN3dPY8FBRDgxsvv",
  "key46": "3SRUdujCqVUNPc3puSR3As8DM4FAdXSEzA7ZK8hCFmiXU1Yx3wGamNdEWXh6AmxzTgvuwjwsphxoQ6WRPF4kQhVP",
  "key47": "3LkKcx9fS2LJmMC7rxQdVQwoXdgXCmAjYerYGbo5o7beN19H9P5sqdYqwB3xQmJsctftHP5pKGyw9Mr5fqN4iVoi"
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
