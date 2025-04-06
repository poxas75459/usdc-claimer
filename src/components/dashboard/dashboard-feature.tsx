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
    "2tBw9MLc92Yo61ZZNudt32Ues8xby8otiVDmuDwBdsYRrDWAvBCSZQ7dzVro8KncQmw4rySvmvH2kXPY7kFhigFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sSp5rhx73AEgTJsEMEWGVgUVscjPjsXhqzNMEztcGvFEoRXTYoHMvpFms8Z2Y9HuoeD7Bwva7XBRoEw56cZdQ9M",
  "key1": "4Tm59in9HUBNeu6oQGtnZmJRQo2dzYfov5REKz1uEVgRVGH2rMgaiVbqSNjytWuDCW2WvvJeodPS8GTh4J7zketz",
  "key2": "3kPfTjoxiq4Q2qRbNZecC9gRL5msh2jFtLujLpLtZwnAgnjyy3dKSiipWxnq9xAMNXiznojLpyNcJuSEiYdyM2t9",
  "key3": "4ugAA7rbtHinXBGKjWNKFDNJN6YH1G6XNS6uigZDX4vTxMWLnz86c1PpC4kBv5rxKyKbxVuzNZ4PUn5TycVGPEHm",
  "key4": "4HqMt1ZGeb9VvPGjFk9v3F2UKk4XtEgAWuPtL1FjzoR3WN5pnLUcrAWZsD82LeTSaJrBs9xQFoqE4MsJgoNsJ89U",
  "key5": "2S1DQdGfBe8vhNHiP2fjGae6jWYtcXxEdjFpd7L5vbigGCgEQ8X1ogUkw8Fdj2otYV9oXEivePt62Uh2MzWtt8fn",
  "key6": "54RPzzqAx8gAYtBUQq5tRdQn8rNhStJ2Hed8XYVUqYgr7w2L23nWwVgq5UisGmTcy5B1YnuF58GjjTQCz4XoRMQb",
  "key7": "gZJ4UMBi9jymQu2Uhu42WawrAomsLMfvWwMJA5YMhSuwAHLB4SN2Bvm6vYFQHx55gD39KNCdGyampYJ2bTiEhAN",
  "key8": "4r9bJRRi3iBuwdAtoLzK6RQR11rDVmf5DiUdeDpagLk88H27QxAbaWRBLXtCnN6f88yZVXBx2dpCGNVf2etUGjWx",
  "key9": "ni7SGHSpM5eLUJQ8niePKWr9uQxMxePSBdGnM8boEUCLLvj2QninNoa4CRDxTYcbQrCYviCAreUrSF9D6TzssAo",
  "key10": "2HqpDMr4HvWMyqkWkpv9L33EhvyYo4uktQp7D2DyzzGhHu1j3YBdECfy5G9pWLHi5NTu416gNtNmbw1aKb4RPX5E",
  "key11": "PJt3c4XAVepkPaCRKMPuaWjKqkFyMyAnJD9L7qTKhDQnYy1RBBWV6d8gELHQ7jEtPQRH41YnvA12BmLwPPoDSVb",
  "key12": "fQw83Jh9zwHHwgTnaGH6oPJ4snNa9HyPfvE4rX7N2J5JzNmGA2QPYTxuxMKxkUJGePXDmyfn6PXRpQM3TJGnRG4",
  "key13": "Lj7thuUvBixGr7g8pL91FeLdiDDoHGxmdfUihbRCTixyP352V11ZNFzsS9vGS8fNiiWPgZYVgiDvjaqiLjao7yZ",
  "key14": "Wd8v3qeTMfRruSyUmfGFZsKF6pfChb4L5t2bscVaAkoQ6TD344b8jrb1j15uczo4yk1Ui81VpdmvBGzrUNN3ey3",
  "key15": "tGusKjMaLNgvykqzQ8yuyWLiVrsGpFbfcfdgTknASuRhncD3HmtotNhNsZaotDWGENqMnKfpTH51fcoXqxL19m2",
  "key16": "3v52bqufsSf9zYTbjyK7h8H1AB81MgwFcGB8FijzM7vPD48Ap5kXF9GBBGgWihEuisyTfzS2ij6VESqyowJkaeK1",
  "key17": "594JdratArmNyN23ennic2jPNpHLF61AhntRK9NuaovDvYFoX5saNtjZ28CShEAVfnYgpaRnF4rrPwLHnHSBErbu",
  "key18": "2E61P85CRxMGB6VxKEmJMTEPhmDBTvJftHnAh1qDVF7c3yrCASy6BF9bo77ijcsYk8s2Hc8S7iZyaFWDEKckteRQ",
  "key19": "h8wk7KoM4hQU7Ww6E9Y8kAZ6E9wKqNSGp1YfKpVmPaCUv3bifBK8h2HgMQjmV1XQUsnAfVnBwrmn2xqixUSBYMi",
  "key20": "5KGz5Yq39kewyNCdBpzA6X4DKwsi6EFQuf9DjiLBf2cxG62KWN67n9jMDLYSiCqCu6anwpb2WhLVq7v6iiu9EhX1",
  "key21": "Wh2uc9DFimArp3BwEzGyDEDEEQfXGj3DsXCeHZZSHM9zDv32A4E8y5XD3xptcnsHjUTDgA3esy1K6mKuggJSNMA",
  "key22": "2M2utAo7dy8ei6ftpe6oNR39gHteqrAMSuiJWWtJtAWnz72wxNGsbDMzNLn9PVvc1qcAveGsgALoKJikAubSCP1A",
  "key23": "44WrNvNWrcnFJBZi9MNTrtvwahatsTz7KfWWsFv9254it7DCb58pBxCR19DTbKx1GCVwm3rwdSTogH4cpMpCq8j4",
  "key24": "3ByfTVs6hWJV8UiX35pTf5aowA8Vw6dXyohb1KqrLXakUg3LgJjHykiYuMMfGXx3i5NapCr8BQYXX9JjjHxpKJK9",
  "key25": "no2L3T8NKMXtLsFZ5YD2P9H68n5gqAaM6sYBFmJwT3w7EjQ5z1Lz5HduBokbtHSrigNaeF1J91rNM3umpN2rYBA",
  "key26": "4J4E34ZQFL2b6EYK8H1m4BhZaSWn1eH4becT3oBjErLEuj1peheXLu2fP3Bm5Wb34k5P77DoY3aktESPdNzXSP7R",
  "key27": "3nX57PSVtzCNf5ZMjWSUUpoxVfj73BcgGihzA5DRt5fFKyMA4iZavZ485FXj75fQRrMz4KAwDKWjWXkBdV3cUJiv",
  "key28": "tmQxHtPHMMHDYdzwVwWDPY5LkL5pnz6CVhwPq4sWhN2HfbGYcEWVFfCpj12Zeuc15NY2p5omK3C31j5Yt9guB2V",
  "key29": "31yXa9JyoEsmbjNQVLv5ZnS6t4qBszz1877EpXAHV1qWLivDwRDHh5pcnENPiuFHdvFW4Xkdmb2KiWprV6K6RoF7",
  "key30": "4p43ge2yRZGc1pDxypQfzSh8anKwyzwTR8M1aj6qTRD7dnMTcsMNUp2p95B5vEBFZUAwK3iS74ucTtQoXizNbFX",
  "key31": "2Z7jaVppkV68nrMNbQa1nYasa3GdASCGNYChvTk5EeKYDC6KzmxSMAT7rAS1YqEoaPx7Za9msFspBSeJs8WsFnTz",
  "key32": "4Mu45tAiNEBBxuMbxyoJMXNMSo326515eXwYzPB3RrEfTvQJnaEtE52WydjJiLodvDHg437uBjkqQohYFcLYpCb9",
  "key33": "2YwknrxYf23FWQDYLjPik86KiAtE6hMTVSPq1UJefgDSs3BK6PjYnCfduw86fp8jsKSPXR7rMcdug8riVpqgaddQ",
  "key34": "u4HnqoEfgCgwN9UTBTL2LwJaWVntjzKWV8GmoHUJJXJHPK8vCUFhakFAjHHuM3Wmv8VF3TKqYz5c7LEBTt4Ft7g",
  "key35": "2PVMAvE8pVxbXtXskiw95zqpyiTfHyvAU5rAor1qAmu8SwifXduYySRpnVPbA6a4MxHthYKQDVn7MuX8RquTwCPb",
  "key36": "DxsFv52ajp94vyp5qZaQ3jC7qW3VGKCjSutC9ddPpFHGJZJuEvUrY5XBNnoshoddv56EZx8sdGrmSxNkSpB1pPm",
  "key37": "3vJLfUiACeopqmUBGyFeAAnCkcMFsvbvJJAenMhmRPSo6zEQazWe4eFbgH55xW9Da3tVCyQK9e1213HcEFWN3cQo",
  "key38": "5eNPrHZ7c8i7gJAwn5jrnqXDoRSzZvJTRbDhmZsAhmiiHTNST3WNBd1he1S51mNc6m5RU3FcGMCz8BL5qLCWdfmR",
  "key39": "284a7kvp7Dov5eAX4PDMgc6Jdjje4r3NBEAagAcUQdvcB8UvjtW3iQzvucLV1zuSDnLQBi5m4nzbeSifdfDi6i5f",
  "key40": "erGCX8hwgsLdNBQHRqHadWP2d9o8gKTtTqGmU5g5KjNSM5XUtpfTbes5yY38W1pFASKy1qg5FFq2ZEKW8F5EJX2",
  "key41": "2aa9eXMPDFCdkDXJdJM4Q4gbAXYYVn1t4xVhmwMC6ex3Psx2zbdVWCeKs1qiycwDySqwiJREkUQHJYMoNUQBRZQo",
  "key42": "2VrL3hHLFyAjeBwUv7XEUfKugtyz9RhoBYwJcSp3jgwA2ESTSDnD3Dr3a49qEopYuzRmn59MK3o1vrYX1ozHGbF6"
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
