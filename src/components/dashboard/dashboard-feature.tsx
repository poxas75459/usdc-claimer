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
    "4VB6vwVTWqXWaRmg99PmaWB9VmWMEQcbRBphynP9KsbsMJ2aekDAkvbDD1wXZLxwUJQtbRJfCsLCA6K1V6w1GrWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EEP2ijEuscNSWeXaG3WwCCRzHonVDbhsYgjmLneoeSfbJXUBsDYteJUEGCaMJuAJ9xPWXWErb6HARGnHJ3mhFeA",
  "key1": "2LSk4BsSuoh5fEnADyzpCTERvChCdP1jVpH6dT1bgLk4eVnaN4JbWB7Td5fZttpaRhA6NqXSKxqvAFLWUn6827Cp",
  "key2": "2PeMa7rXfg7d5TZmnQsqk1Tmg4ExhxuD3E8fDduEBUfXLygbvtnxYKFGDEsYDH8cvv5GYGb8KLeK7TGeisNhTUoK",
  "key3": "4L8WaQozqctJaRmabyCjqroM8pCivBHkGq9ntJHYi26tRj3mA37R4ZkSnW3eupxUguBAVjWAFq2pfXS4D2X88XJx",
  "key4": "3yt2swWsPh5ufgPXZUmGByEEUagXNfF8QAFtLDqAJxmFUPor9yRRwhGNer9rM6g3aGWEks5p5A7WRxmyLjBcGGYm",
  "key5": "4YUCbrYHEwfSk5XT5MxG48bFn1prnYGTNjxF6U3afhVMxnD7RBihWER5fK9vTwWPLugNRrmNfYiZikQY8xA7Kfmx",
  "key6": "5Lygyz8AMRB9zJTspMMuT4PSSmc6u9rV1Pz8cpDSnQUbBEwSQvu9GwFC1iYtFdW3uCNcygXzub3gPfwmQAABfx9B",
  "key7": "4AdwGGvHoMbVLuKWR33qxND85pyXqZvAb29Tb5r5HxD3TLTN5nsCpiY38yPAabYgwYg2f1iLe1rdKJvUZSGvam6U",
  "key8": "5KKaGVWxpzkUUarFKV76UvyZqDAMK9MzHHRMUjJ8xW56Z9wp3LR7DJm82BfpvEXNXtJt1R1U1mR5fAoLfVch2gdF",
  "key9": "27hdQPXAoVZHFHc8zTRHsdW8rrXPdGRxmWqS9UbmoT7gj62YUWrzYcYAUQ3C3hetCg54H4hWyW8GVpCSd8JpKMNb",
  "key10": "4i48AFjTREWaoCHjGnCPBHJRQxomiHhJi7YuKFhnSa1QGTmj2G2fKKVuhXzS4TJGJo9kFREus21La25CrHV3Suif",
  "key11": "5EW8w2zUJTBDAxia8n8eMYTmUi7LLAiHuH7K7GmUQSvnokvPMCMWCVTX1pF1zVatLQu9z9XeQE1ogmehJ9fjUFg1",
  "key12": "TYgrTXQVRDdqnw6cAbE63J8N4TWgJJTgq5j4mukDzze1XHQ2qrW9jwq2dFtLUQyjoHz5ZciBmcrnVhNTKGYx8jB",
  "key13": "4LhkSs6PpvQcdzTdiBk76yuVUmTx6w8DzPEeqtPajVL56ww3ehAhumbphjCiT9vkS4UrkBEPrrjiHURNtSi54QAJ",
  "key14": "ufianKe9tbLab2e3Vm7wELFsJ8AFQNPawAvFgPRJm1P9qqNrf4pa77T9S2aAuZP8tHuEzapH5K3Jee13Qzcqqjp",
  "key15": "3MG9vpaue7VaHSpZDfNLATiE6AoCAbLnzKWQ8TGRuiCWYwCdwDwGraRQ9Z7mVvPKXayE3GzM7wCgkRQJUiPDvgde",
  "key16": "5TvknzcCQn64QpBvsvapwki3J7G2GrgABShMGTqqj6zuYX6Lt4o9eZVBgjacR74tTKp2kiEK5L983tTGVjnHMrAt",
  "key17": "3NRLjERLzB3ubVuPsZFMKqJSdf24wbSE6RaLd9CmfRnCBLaW1Amz22eLwM4P9xbxVCH4A7VALx1JSCinrFtDSuX4",
  "key18": "2Bj3PUrLoXapAVCyJ1iiC6TfGf7fsHGYcJXqiqBZZASyuBC79GNt3LgcsCFLU1gEn3BjT4iK1F7KwapNZYrSwKcJ",
  "key19": "336Nzu5TwV7njuyGznL7dQAL8q6Tacphipj7vsd6A3grYcSQcef2DbeKf6c1mawA82zpTt7vxoDZamaQxypWHMq5",
  "key20": "5Z9nG2KvJhknhWwpuZjg59gyPiCbcD6JvwTShHicmUPfmUuS7TyXK1GjDEzY1XW3jkbmCtixqgBAhAajJ9QVTk5B",
  "key21": "4jBupTcfqvjofXdRZzvkuLFtUQZsAtaCpVmMDGbZu8htng6wG76SFwzFadTdagiHCVM85jc9HvmB3RywkUM7YZFF",
  "key22": "35MaqbdSJ4Si9udB6CbF7aLeDYBon9tVAkxGXjjFihPwejzHBNjwAdoowqsXephLebsCezbQULgjsJ7BJH4FWQ8F",
  "key23": "3SeLwkiBZ9RonS14rN7Q49JxZdWRsgzXwJpCRPg8xvUJ1vkmsj4BUV7cWkQgQxS7RH2B2gy4zr5Vdvfhc76V8Xq4",
  "key24": "5B5QLUT52wGg68ctZWJJjYFZGV4wCtrduXpWrCrAMQs8MevuwiVLs33nC5KZFUHbY16Ww32vNmeG2vF1sYhLxPzF",
  "key25": "674YF7humeH6kZC78u6CbvHWQEH9j8gFxeQNHiLdxnuSJnAnQP1K7shXip4WyJBJRXiZWbztv8sEAx37feQ9fjyD",
  "key26": "39Mi9qumoWtuibHJnyVfRxDeXceVAj1tTEnmeT68GXRshmVAjrHUKfskciMeV64vkCJzEkr6Amyht8eKZLz9t2pm",
  "key27": "4MbL9vvFnTXCoefgcSvdmRASpxxGzr66wTqLVnQfwPmu6knRxQ3yD4ofh6oGmqqMfK3fXvdfpmewZKbHb26ZZyb4",
  "key28": "5Jj2arGHys9xbu9nTPHSqiDiQkQvk9WtYBW9ucVrUQUNBiBzg8DnHSFDFT6YV26JwT1pUXZ35h7Fu8ajW94jDBEc",
  "key29": "2iAbV8hHPU44eiy4tpx5wdD5S3oikd6rdMRUtkDJAU7FBNPC9YJnuQy11Fw11UYbKPWNfaJ8QpDavnBr6U7AvUo9",
  "key30": "4Gv6NZWZzTeu13RKW692YrzTNuTPDq4qC2UJvN5hgi8apmEaLcHjVtivUSkU35fsie24dY1nNJvyXSUZpBinjj8T",
  "key31": "2WvMGx6pMMNGLzBxwUsgWxkx9TncG3BiMrKhsee1WB9dQRkY44tTnQZfTR1V6ZcjvzExjs7LbJ8y5JAR2RvBaYny",
  "key32": "4DfLJsQAEXQXmMxqkcjKGFkz65WkPd8RCtyrDcMAVrRvCthwBhBH5RHHP3346sn1Mqcw6yuyJKt8SH6TARpFLYxd",
  "key33": "2a3p2Y13KkNbLYK4aJaKgQrv77ajZf263THiZnBgGKvrDb1HseotTnEEmghbP3HfMxAEEHWZAJ7hNwMVBVZcfHio",
  "key34": "C7tntrLdyYHkdvFE4aw2iwNve1nvD8mv24wpJ2HRZQygKdMUTyGAydwQhZuBw5FrHTJYupYA7ynn3Xat6oMLGC4",
  "key35": "deNxMsAtVPwPcSMk6v9SfTuy8ZFg44SaJfNwDS3N9kUm34UWz4ygRmPF2Vun9RDHpXtK5HHhEZFqcQE8DfjETgN",
  "key36": "2sgpuUxfxVT5ptktWAiTMJwwGwzzeYKaaZa8QzVssqbXXov4NUNNcbTmFaMCjcE6LNViP55ZwMHrP88yyfCDbTnY",
  "key37": "5dsdgenxiu5kRtLebxLj1tdRE83X2q4F3CEwjB5978ENSLDfQDfnJatU1RpwxbMh9yGjRcsq1EWQU4CMLQJXf1cR",
  "key38": "59rUV4wbnqCUox9Us8bVhfUhEBbpARVgGq9piEhikW8duUj3ENau9YyBXagAUEJ9rEShf2SPzE7YnecJ16PoWHYR",
  "key39": "3BcUnZjWETFo76cUHxfgbGrPmvyRM8SV6rD6Cx3iBnoLRuzbtrgyysBLCiikqyx58DmcomQz9iMJhUpPisZRFvSe",
  "key40": "3FUHrtDpiGuefnuWmEmJBZjpUiBh2BcLzmKZMJ5shi2BqRfQLLamBJAxEZYDUkFws6GkV2EnsMAUrCZQwETPpY3Q",
  "key41": "5YiHKfxrxXpqrn38eann87p1q4M1ASUdGfdARRUmunNVd19c8oo9VcUA6Y1wctBFDwGTVMxcqS7V17fiPWKumKjk",
  "key42": "23hJ45YdvAt7d79yAcTEm4n6vMTKwQira5snQVdDVN1Xdz2HWP4zGaY8P5VadhdxumVpcfMYGK1v3NszCGSTpscY",
  "key43": "5qxgM3aoDCGPt6AepAECfQsuSHK9Y4zw7Kie5QagtDT93iDXqMZCWbFLpUUEDQ5c7HkinCV8hpuoDJdYcBd47dCb",
  "key44": "2YE6rTbB8VHZvWRH9vDeyvEbPaUXi2PSskjqT99LvY3vV4TonrziuoW7DV7n38er3fbfVhPLfLMsxyADWMsEYHdx",
  "key45": "5zMPuQVP9gzB2mhRdZ8qYQztbBujaseTkUmmKRrbGMELjKsxdyjXDGXckHhQiEtNVw5JZbVccaLYDR71j8aimhMn",
  "key46": "5aQoiYkQ6HNjbYqdB32GJhJ6PpakPqdPjJEWLM4FPGBA13SumnCysLhTCcPNw5g4fErh4aHbep2hV1tWyZiHFvqX",
  "key47": "32UqLKYd5S6rwANrWoTqo5UvEb4kaZ23AjuTzS34ow2Pk3StCHD7J8Rah9CUxwM9YoVipXSR5s2B5nDU4XWA55H8",
  "key48": "4CkLrkLB2bKADxWmpD8hPLHbqwkLauChuRRATGXjikZSJdmawARzCp7kbvPJc5krmNeGJRsZHd9gJyMWujY48Vap",
  "key49": "p5vf5ADoKjtnoguNxt1qbg2mSab2PiRJQ2mKvbsCu1d169WgRZ3Qg5anZtf4cxFzSCSB48ikmXjovJsTUqSt5nz"
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
