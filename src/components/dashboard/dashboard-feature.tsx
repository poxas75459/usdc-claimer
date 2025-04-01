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
    "2968i9W6E4FHVcanoAaurdfJb64DgTvbSH1Z4Ygr43bU5McBJPyhhiWUT4xeYrUNp2XLKz2XqC99M7L5D45ysMzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21z2M82YsNzZpn645oew55gS2SyJGjW5WefuebyzbCqheXAF87SYVNKRWzY4qSHQSxFMmrkoYj77Jg4EH6istLKE",
  "key1": "Qr9aMVq5BHfbiyWVW8Wt5FDv1GLLRGH8w4TyXHYF2djdSxUZbikwCqpn3Yfkiph69Dz3LXyCpL7Ts7gvcwNiJXc",
  "key2": "5J5gPzYUEgw4wQMwjN28Jn7hcTE6tdMZh9LjfahqNFa7ypUzryMnbHQcQHZ7BKnKkzavHmeMfmPZs51Au8QyzsmD",
  "key3": "5dtEuAREsUkL3BE5Tz4wts7TMZKSUJJTQ6zPUXJ1npPMU4pJrBETEgcgac6iyzYy5oqcRFtopWt1YWSRyXBojk6i",
  "key4": "5XW4DhxRo4WYEF1bRwkVhq4nLdpigk4KpWF76ekW8YZ3HseKi6ZH2W4kyLBX3AWGDcD17r7XksudH346w9HDPrEw",
  "key5": "5JXDBcVsD37Aabng748cvQPfR5iHKiF1pF9RJ8n7Vh4L89zmk7xVagFXqVAhJra88vzhrredQwNpLWnBw5Fyfjx6",
  "key6": "4cKX42UQGpdQxZfQMru9HvZq3iQ1o2r3nx41ZB5gha2sM2T9byxrx4xyfWwTS1g9uT43v8ACk98E3ZgNdoR9Sfjf",
  "key7": "59g2AEP23QSUcskDkU6jj7u4kdhTjmiPiTRRP2S5MCHJudXuX6qbLrkDzJfbYPXKKB9Pofieb99i3KUMPYb1CMW1",
  "key8": "2ZKzzstfiSo1eQCtqE9GtDwF4hWErt2aSka1NYn9qQrDgcx6fxmEPXMWir6GutaSrxyNR1ePzd6RzBT5FAYbs4Kw",
  "key9": "45XKCSAJFrMmpP3isXHuv455qbxLBYmn4zwJjb7N5inHYu1M1vrtxCLRi5uAUmHf4vECAdn44jf5ukM3mD63y9uT",
  "key10": "2HxD8WKhLn3LfftY6jKh1WEeNfGA5cDRS77uVY5QLmNjgrkALZbXkMrPKfiwJqfbuktAopYSsn7GZ1MRe5A9mMVu",
  "key11": "5aPvqvDejr4Gxj3Ka3E9pZZFBefL5czSQt5KcosxYLEsDEEygWqFMNgB3r9TMegMCorS3wjw1Rky3M8DuashfQqS",
  "key12": "2mZu2Hx44Yq3ZUQRUaeTqgUcQUbmFDZZQwt5XViP1p9TuPUsKcEL2Fw4PizsakPY3ZMdFdaXG57DsznB6u6EaKSy",
  "key13": "47C9hocnKt6HYKo8xY6qdjNScyN2Q4W48WoaJ5FdWCH6wmhxc7aHetav7RF9XvBB4hENVpPEswkAGUB6DK5tvVsJ",
  "key14": "4XdcVk7VXD5znLniVHHgGDYSz4L2PvUpS9dSThuNrp41KYy2cRG1MW4VsyAa1R6X9VDsqv1U1WkwJfXnw4vzCzWi",
  "key15": "7rui1DwWcfZC8hstJmid9JGNKUzPFhAquSBRij1X9vpiMuG1ymibqmbUoTAy9k9f67zf6LTdBaTDerR96WKVsw9",
  "key16": "4b8HLGAoHiktxNpf5FU9VUWdji655mNU9HSUzFrPYbNUhKgzyUz6e6NsGZLKTU2wHkkFhdZsHuNa45pHBNADf6qa",
  "key17": "33o1ubcdGvL3FY2KxVBn53D5DN2ssWkVtcDstrPbgaduup2DCeoF7vpG9dQXJAaJnnjDs9ePdEspAH68UjXGkD6w",
  "key18": "mp2C5dRE8bng17kRdPctGsQ6aicdsifYSCMEgt3dVBazutnvWQWLPS2AcqLQ9hnmASHprwsw3kKqPg5VEKcBZ1k",
  "key19": "2gH5XiorXcygk25gqhxJUiZZJLg2Jv28wdSGwGku5tU7gQak6FevrnHZXsHwqKi9RcWiqUy4m7m7VYdRtkuBixws",
  "key20": "4LjMfSnDBL8GG5LGQkNYgNYHTL91zayQL8N9MWM68KnxKoyP96MxUrbMsXaTdz8wrVv7pagQXHcgiQvpfrB3W5rb",
  "key21": "3Ezxo4p3oiMFSPs5dqAE9J4Yp9MsF49gF3cQjhGJ8u7uo8wYrViZLmgT4Kt6ZnzouywyesHFSTrm9A35WWEngRR5",
  "key22": "3QiJHFxrY76pTzqcP99kvzPXoXfJgvuFY63CaM7wBst4vkirWR35B1S2R125AQCgXcjLmNJSKPXpE5Vg1KWRwTCm",
  "key23": "5ReV5q4TnniN2hNgXyD3FyL91PAtjwEN6AbnqdoHxncoDnejREg5VBtDk4MMYVYEZD6f3nESbsYG1sq3BuaYq8p4",
  "key24": "gYfEfXPbpm6PoFyAgFYaTPnFcNqz4pTH3qPFAYxhwGq1Rd4CQ6EhdLoZNGQE4MKqjBF2bqZQVGwGq1pswkRAPG6",
  "key25": "2ncnDTa4B3jqLmwoGnjv1hJVhy4eR7Gvdy3UNvKAcANJHDdcxc9hAZcmvM27nzDDnyAX3zFcAd5GDKB82UqSQc4d",
  "key26": "NZFZjRJuUT1K3JxrgU2WeHy4C8oq7WFwpqZMewYs5WArjnR14iWTF7whiC6iKpZ7Mzh24YCaieF5FQv5xZcsZ77",
  "key27": "35QkK9bkSQ6bY7aJPVGxf1AVfxFcbbavW8eiH5ebNMXvKVSKirxqeYQVmQ8T3Qhr63jJ7AyDvf9K1L9DAKy6T1qG",
  "key28": "4RVNwrcqNMLNa7Mw8u6EWKh3e8KxTnfL3yhZPrFhW8Fho3wvQRFKiHvarfuf7UKTwLRRoL25qE3WwmcLSHQWinha",
  "key29": "3LvzzgTiV8mz43SRM7yvp754XP2eL36ny6ErNfdhyYMJJ976ZKay3ss79wwcMzd322JD6qYxunTN3MMSMCAj1nWs",
  "key30": "5RygLso9jTvzrSaUNKbzHUpvB4NmCDnG7GrNcYVVautg7f9Bf46t4i1JJgQ3mqth412jMaB2XHKtGi1g2xu6NtnS",
  "key31": "8T7woyvLFFbKpaq82Jo8yguv81PC6E41aU1FsbMtvCTqCH25mfg71DrZM79uXek27PaqTg7h6aSChjc2Lso31dZ",
  "key32": "4hruM3Zt8mRScf4LjmrEfqvcQmAxevnLG1aD2snu6Mrsv81LDSLhW5BLKyH9kdDvyK7ezHE4gWhdawAf8nv2DzyP",
  "key33": "4kUi2ZAyXrNr7V8c33aFuPk9cavYsVzMLNsQsE17KgFCYp46PkkB1SDjNcvGm3EcXkQEguyZv7FT8LACmmwwDNEs",
  "key34": "N2kkVm2guSPNkiv2VfPGGuw3A3NVBSpmZJFXMeS2gn2c4YPAiNv79UTr4t5oSysKC77MuhzQ4bfEKNqqXh8oQrs",
  "key35": "TkB9Q3xMv49iofHkBKiqTFwdMubYumuuQkH7Cg65PftsBUz29rDUxxstE2wun7SgwuDyt9FydquyMTkjjzuXCQ3",
  "key36": "4NBK4xkGiyUnxZwdH1QxMAMEVUTjDXnHcXmBMfiooL4g9iuHU7PXYQFjB6Jc1QqgowLY5eowxD7Mp2XusTwqpmZi",
  "key37": "43pkNz93jqA974L5w8vqzmmn7yJBzzVFW1Uy4xyEXKSrBF1dbfgmAai92p9bhwGAS85wCMMQktmD5GPooz34GNPx",
  "key38": "4Cym295iiKsNsLLs2TtNTW9xM6BSJaW3TLtvK4PMv3DvGT9GfcNpepxGoXWDUSec4282vpZKeUWHbGJaRqA6NKw",
  "key39": "5jSZmvQJ1qyC5cSEQkPbe9ftfd6AZ3DpQYz3DfMLXp2JWHmugvWhuCSQ5gxviTU1jP2X88QnFEpMmeHNnSiXRqW7",
  "key40": "3UjhF9qoEqkgVco3qGpoK2fytMFd1H7Eb9MAS9UHqUwY3MDge49SgVMY75dQ67HQyjinaeGy5piH1vWWs1wTYURV",
  "key41": "2J6x3XeLdKfxXUfCaHhDvH5CnpHHDkzD25zTvFDywS1sEtDdPVZVRYCMofNosi1X4dMPMdVkLZWDL3L5AHfpRz6B",
  "key42": "5S4oY5T5BewPWMT3VqMFk6aadckmHk44QUUymtsKGfpTkVhrV9hfvEBJYfe3v9U3zE7ymmy3QeHVo2GTra8u2yh6",
  "key43": "5Fef2MbaJi3fV7wdm1fVcF8AqUSpR9TosQjPFzSXS8PPdS7Yr85ctqPeYTTNit6q5DFNYVTZD33gN3z3yc648Hut",
  "key44": "2J3ozeqvSHGGV77y6D4BrWC3JBr6qVgPtvVnWbYZsf3LGSHB2BiDh2ZmQj5wuxKscKG6a2Tf8WvR79JAsDTQKqdJ",
  "key45": "3Uk1L3hLMoptAjoHfyXs1xpgeuDAzXsSBR5MQPCUBnazGcPav4WUfjEpZbph1TkRdHm2bfDTjSdK9E5csd2VoRjJ",
  "key46": "57XNH5PbJ1a5N8QcdwpiK7r2ct5K5352NnGKf1QwG1siGhkExf8HhgAje3YasErdyEHzFUR8MTy3NfpqZjukvZ3T",
  "key47": "2rFDtevuFeFuEBGxAVeiGoqGZ7hGMMvJviQYVVrwAYKgp6MjqQ3czLSAnvmkLLZ3FwbiqdKUYfhfVfN6ZRiq4S91",
  "key48": "37hSkrHMbHpJpUNovA4NpcKpKVekw5p3Zvjb5PDoqw1hZZy2KMW2VtqhhPm7pqybGWCZQHLJMiYMCjkcKj96Aiqu",
  "key49": "5Gs3AfX8J3G3ra5vknCNuP9FGb3XkX6KATxpR8KeSoC5Yirax8ifgJ4hoYYz7KDiEg2C2EyfoVTvqQrAak9uaDYk"
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
