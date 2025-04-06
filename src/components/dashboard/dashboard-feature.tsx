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
    "4dwkeRKXaJGgUynZEQ5sSLP2r1zBb4t8pFue8n79ia9rx1Wq6neFMA4YT22uDb8pZyjzk94Q4hGYRo6ucgUC2Rm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jJpMQJ2n262LSxprbwebw8YVzoBeemu7MM1WcLomwnDNcp1sN4DvzRTT8LMeqSPmZoa2YDjTcVMX5gCJBmoV7Z9",
  "key1": "5taiunqLLUKdefSmgGWZYpAcnXvpDs1ehVjF4crf2iL31VoeyneVpPyzZdcnk1mZZ7TW9f2QiekjNQQAbupkVaYu",
  "key2": "3V1vghEaSURgoQzTimaKz7WEBGZBcjhUyKfQTRFgcStqmiNVnW3KwsYZqF6LL631TkwsYGDU2fiUbucQHEDBQZLW",
  "key3": "32eEbWzwiXy4FkHtaiLkSKr19pGi25sPkkMSu3a4kuRgA4KT8DVZPnUTucGgmm4A9VBtKZvznsGWh3zgHUGpbdYu",
  "key4": "HXqxydhPpziCEzwDsH3A1fpqjPXrqpR6fFFt6o6JuwtAMvzJnvGURaMUS1gr4oBGfJk8CNyYz2rLbjmXkJ2V4R3",
  "key5": "4vHLXmwPMsLT49jFwvk1afPGdi3tTaDncCcuqpwySg1PGsfa59mggUxvmR5qqhCpjTXyDCA3iEc3gSKt2neZtSg8",
  "key6": "4J5rMhZc56p3S224YVaHDn1xBDgEW61AYNP6hgd331VWWftSRQa8Gr8n2WZUiFUVxggkvhZa2fsSdpdbkPD9V8aL",
  "key7": "3TcMYAZaeFKfD5EJPxqEuyynNF1C2Y1U8BVLJDPsckJ27FGjawf5x2Qaxcdpwn3XeccuM1aVXZ4NZbqQRG83t4hT",
  "key8": "3yRdorMiDYBeXVuhSwUqjnapbgorsJiiyjEpf23bU3tC9wKgJtJpmkLEhkEYnL5BcdJ3hohdftXVfrYWmTrzyPVN",
  "key9": "3JdtCbbDRvfdTfq5LmqANtQ6i1mEdVDnkRTpU2enCS2CT5jFsBuM9DeStkCtAm5o9b5XJdHUr5VQWBvZrgAWyWxy",
  "key10": "31GnAgjPFKzRBAkML9j3k5w3ap9NRf9oS5fC135qy8R5vgDo6BjPksNuNpUQ1gWVR12Fq9yiU3HYmgb6wzTohLMz",
  "key11": "jqVBU3vfrCV9S9n3gtuNHpBi1ZZEwQ7Gz7zYN16zW6qQMYmq7SrApkhEJY6VX9CEWeBLZawotvwSb56D6SApLiH",
  "key12": "4Wf78kbj5uMHu6rmi1gNhTENg3pANpbvoJx9VMi7TRhN3Hk2B8ZkAsNJnSg2wTyyNhtPxgc9YvQvhisYJucbwSDx",
  "key13": "mHcXDh9vsdQBv6uN5FNwCAAr8jiZ4oUD6MTdMvwGXdqHYYPeshgsePf3aNEoL1pjvHKTRrWE1wEyhHGR9FABb5F",
  "key14": "3m114nQ9472E71RsSTresHnTjGu5fjSkVBq8TShd4iRFWdcH877GmseKDAPJojT9uopXLKvTabwHhR396YC8fpSH",
  "key15": "4f8H7FQmvpp5HDGNCgYqqGgKWZ8cz3KMUzt2vx12NrjgpyxjTxxEi68g89t6MSQrWgqVw2GbuGWHTrVduc9ZEMnz",
  "key16": "4Xqv67hCmK34PN3qSae6UtnnR9vFrXywPeNvEZEnLUSxExSsnfj8srmgyP3B3xB8AEcNcyc7Q1uraRNCqK6mpUug",
  "key17": "2kgSvKRdXtgXUqvsYev4wSsTzVjV7Uz3HPjgWurnDagkxfAvhFmL7L6sZEiNWXz68GAeN8TJqp6Wnok6ZDx1J1Tt",
  "key18": "3KrL2Vw5nBzx7Jbp8kWVsfbPX6F5cbSPpu9cYTVBtgsz1zzXhx3XWnLCGsqShekMoptgWxc1T5m3JVwmCsRPK8Kr",
  "key19": "5CKQT6P2CxZQ3fhHX4u9VJ3Z6NaKYBK2yKh1hUR9p1MycuNRv1Hb3kbKJyw5EgPFwgsoyVdDEybKeocXsz3GFNRE",
  "key20": "3W2qCisKNT1C2XzP4u1Dn2aTgVApFAkqLL4oNyhaWDzz1TFMr2rq53r4YUmt44BWKDFmiPh4smZoP5kZv9rWf9Jy",
  "key21": "4DDKc5EbGBsh81NQ9e2DP2rsNS3ex77XY3RuqX9f9iQ7i5PbSKbZ4hcFrXPiYFyXsHVxc3HkfcnvuA62p7XJTTu3",
  "key22": "2G4bsKV89M2UibdvN45gDTZNv7BJotaHyT1KgXgGvurgvijk1Aaaz8Qaj6CQwJSq9Q3d4gPGMHqE7RZTsNuQG1mv",
  "key23": "5HMwSUYWwH6rqAnADqUwtbY96vPrT4A7UfDLKkdyTLxxqyHA6fh1g3F7CKHFLb8mBba5Jzujq6QqqvjKnkRpWeMc",
  "key24": "2U5DuLSxGeD6Ve7btnebWU3d8Vj5NVxdDxzbWdxFiYg5mLHzoAyfLvWDnwTDtrMc35YpYoBoi5BJdyEbKHeVSZup",
  "key25": "2s8axu9dpGDwWdjM2B1BbQYE7R5VnfGUGbTgAbiB12nZ7vmMamUW7urEGz5WX6j8vwCav2g4fwky2RZy4T1JP7Gu",
  "key26": "3KBTx3VDZKMvyCq2cTdNJRc7HjETMmHmuWatZExZBWE5Edvd7jAxEsVvK9BNtnRowwgPn7L61NpdJ7wiofmiLMNq",
  "key27": "26R6EBVvSWjDPkJcw63RWpJ9fywQjyG3FxTad38ggxBGYUAwruCDXyHHmQpR18yQA4W9xeAZooVPbk4cXWiUk28a",
  "key28": "3Caxz428dkwaaKeQXUrVjKL9Vw6XqmPAiEcVtwqsMpkANQKMLhV6EaECK2yAUZFPLo364n7SsLp9hTGb1Dk4rpq3",
  "key29": "wJL9jza7wZ8Fxm2PZiqwdZbR51JktqkDpJdEaa6WoVZvvWytXP76EKWkPG9D3c7NQve6CwMsgwtU9HPMDN6rTwH",
  "key30": "3DakqTSH3d1f3yhy3KhFonie6ipRB68MHJEv9B54Jd49M37YHYwd9LgMerEvYFbwgBrK6XypTP39H1RkiBpjngYH",
  "key31": "2FiqF7daTbUvVtkjw1c2JW2TSB8WG8DMBLhkNyaAmU8ERczFZeDokBRampryQesaB8nZW6qwmoYxijtAWHPrGF8R",
  "key32": "nQqXikHMdKyjpsuvFNZjBdTwjzU6FzWxdQrZcSvLcKrjFsQnS32EvFM73KPtuVPiA5Gx3aLHMBnWfcpRhN7Zo5Y",
  "key33": "3MMM4Kqercs6ySHy75uKzP6vZUpGCcJ2Y8oNuxTypopatsqJDiGaT8VjbjFh3R5zESWMy4UUcbE5LUMUfNh4J2tv",
  "key34": "5ttcAQqjTvvrMsiFSfKcMB7HtrwAoVBKSFFte81f6KEocowmeN8EtsCkb8rj3CYGou3RhgnyS3M7Pf4htX8EdZgH",
  "key35": "Jp4LsnhMyBtoCsHDgEUexemdKsdTRNvepNBUPA1D4NUBFXvVtM6JYmWTJbuPw4TtzicoLx5dJTRyNBMPjiogeKy",
  "key36": "2fULCemCWNsZAMXrrpoWpkTrqqGezBcoqH1Q3dV1A4rMYxLazCQ5XD16tYVMyPefaa2TYcrjk4CcGRYCsWamUcXL",
  "key37": "271vnghy3PQLaWtBuhkj76MX7n34tTAzQRRRD5PDNByMDVJVTjfhS9Pww92A1HGuC3g6oqA6nx8f6riQv4V7LBMY",
  "key38": "2GrRU8bQRt46BR2MAZNAAJy9ttzUDWM2CFiqSfYdECRh38nXzHPaWDdKSTLuNVDfHknGis6TutZdna9qbU4ZFqFz",
  "key39": "5Qm7SWjgTLGkZAxQDeySPznZyGYZgY7YcYJyhJn2NVdTaeeT1GrcoZxynCfFednXTrKTeLxsd2zdufpQNQsCSE2S",
  "key40": "3ECvfSPbvf9Q2BEePMGwNMJaP1vLsbhh3PKUY97ybEbWi74rVBCGXLg1RxDLQCFxpgr8oWydhVbGZQ87f3xiU2uJ",
  "key41": "5kJVALPUKBe7UzRNekXVuSe7eMTUQcxiYNzaNxR9WGWCQ6ycofjGHb7hsKJAbv7WCb7dE7bLtcNrgarQBWF6nJDm",
  "key42": "5vD9HVPDdBDA3SghZPRkk8xEFbiUDG8sHqF82D4JNsUd5f3ue8dJK7S2pFpF18VU7GaiV5Nc6XabRjsBzpP2941T",
  "key43": "2W6onxHP6w2oDFTd2348ENgCnyehww5Lpyyh2pjRSVcmfB8Q27TLMBJvmyu5yU8E5mSQgaC35J8bAzoKKahzjNn7",
  "key44": "4W2C2JF2oGN4Qu3iauDq8hWoK886VRRsvCobXh96waUEXtjPPbkSYp5qbeKLrEv3zm1jMG76EBnF9zPAjYVctPUc",
  "key45": "WfwhSnQPeNqzL1Qe1YQzNoSP4jUBqkZie2PzXn5DNLPLMJBwx1b7YrZJeEcBzjtWtYNedfX8ZXmYd5nZJDhnNcK",
  "key46": "5HRSNGXKq6EHYxqyXMLSbsQwmtbCsfE3PAh4sJuxVXtyk8rv33eiu7qqTtWgaoww2c89EzfvbX8qcjGM2hfMxMBy",
  "key47": "4hjHgJED55knWH1BrB4Lc62tQfDZdAkY5z9o6wiGp3tMsrEuFh2EXYgN9yBZH3g2rDB8zaDzfheD1MXfb5zbrLHx"
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
