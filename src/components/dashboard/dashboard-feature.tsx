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
    "5eMdREN5Ggxe1GDBLuE5ApK8NBdShataYGBTnC8Un3fKYCqBLkZBe7zmx7BYrCp7Mr6NcaeSmG5C4mL6anoRrgvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fssxTMTx6TzxYye9JmoeHT83K68LWwZhJXGRC9M6Wmyg4tNSeuQqkzM2XxarCRmwUXEZdu3JpqUnStSbADfsMJt",
  "key1": "AXvwMTYf2PYUWDpCDEPgf7CP2UoyLqN9ArXTJn1sxPNbUBoUVZJx6JT6M8cJXMPFUDKFvDmHPTWjxJbZ3tJzUve",
  "key2": "2H8HCEvYmm7opdmeHh7X1AgNTjXyWHxycJCwU2cLbb2BnQnt9ovD5xviDwkg2VQxCfydeEypostgrijAXbxpRqzy",
  "key3": "Cx2pgHAaDHrJxb2LQFRqUEUC4dD4ad8c32wWmSgMPo2rMumUoTU6yUj7zKx5Qrf3FE22hcDSogA1S6znuvHs8zS",
  "key4": "5CvCoSj8d5aKVoWeh3ZMFKu5EN5AMWGN4P6WeWGnsq3wx5Ag36oxSK7EHiM5jr1JJCtZ8eSUirhmxhRNuiAzZUNZ",
  "key5": "28srPMyzptgJLSsfa5hn6waBbSzT4ZQRPfgh2qqvre2tRiTdYz1zBVzWsjdj1EiBbouwaRx5QZXcnkUasa5FuGXR",
  "key6": "E54zU5GKr3PtLAnRoJaW9PnJT9bcTFE3ntzHVfKuinPt2sNScPSp38U3tb2v8GpKWbZDbsT4EymsSx9ZfkwYuc7",
  "key7": "5ec1HY8VqguSGgfbQ2NVnFMHTm5hQWQEZkfMVSpsf9D47ojiShXdDHdffvgdkDMKK1UjvbD24QLfxTkV6e7hgrGM",
  "key8": "55MfEVgHerfuSX8REy8TF9kBw9y4e5wuKjbKJp1912odP65pCZbeP2Gkgm8dTDzaCVdcu7f4fdVSb9qG868zweNW",
  "key9": "53BvjCmZyzAk6z366j8mG77TPMEzLC6ddg3THPpzQScjHhzcCUByUAaLNPzwCYe3zUMeRAARCNrnHwGD5E8Muem3",
  "key10": "4ypnnbmm5d4racGcMffjh6fkmHRi1ubmSHdV8rBcCXruxbN7dPdL9pbHJt5VEWpVwdY1oBTps8qMNXMtk54R8M6k",
  "key11": "4ruVUAjRpjMXsNY2Gcu1Td9c2pEzddFAtqS2juKQkqvzexqgXdEK6ZRmYTZhanPsUbg8PzmzznH8rHCKuCaU2y6v",
  "key12": "2JdWEZVCxu5M1GXSVupmckCPwreCYJsBfTHup69AuvbTWm94LnA7f7HsdA3XkU9ABTFwX6A9hUipbx2Ss9CTJNCu",
  "key13": "2juK6PeZzanw5qgWToGy88xSjynQyCVhq6ERecx9JpZBzsSEfMeRFtPqfzvaBscQpQfyGSih8L13fremdtAaU1Ko",
  "key14": "569Y3Womyyfp1VYwspCDpi3rC41uMG7uAQyM8jaR99ZoxJ3DdL7iMYBPy4gj1oigHt8cV49XkaKUYEsWHVyre4eW",
  "key15": "2mwEv6rBJELsn4qoDtYtdXuFKqUJS7VDS21MdU88PU7nTyEWPnSFZA45ZTuKZNchgrvaF441xHqqNBzkMNV4CrW7",
  "key16": "2kEGY9oGhTwaAEbDrr4B2QQ4G1m7bmXtRaYZvoVowJzZ2425tZnhigRk9u8ruCgMqtmBtmGYF3BpdVpCcJr1ALGt",
  "key17": "5EZFV6CHwNeNrREjf6te2cvqhSiM1QfyBoTpuk7Z6outC8Bodkeuxaj23L7JYRNaeE7B6gDgEVmAt1KU7msaLH6D",
  "key18": "35VbmckWBJTGGrZ81hNXfg13wwAEYNhb7x1w6UhX9ZgDVRZxisCygUckZRtuQhe5d7eCX3Jv6Qdun76LAdUe7ZC3",
  "key19": "2GWcGsgGky8DkhXRDxZHLVGuy2ZSTPJdgc2eBt2kwtkCUoB7eFrSRhpf73ZvDM4SqYbY18EooQM1sTBucUwfWvkv",
  "key20": "5vWVg42MeWiurgsr6Y47wrPm5joKjewijTNKK3ecydUdm8D6aVLdzyH15A1DA8Fpe66WWZXXPadn5xjpEshyWMnP",
  "key21": "5DDdNC4PsTmEQ6JoDPsHoxY7s3gcC3q8s3DU4gVcZDddxSZAD7GrUZfTZNKH6AdpH94bFW1pHbck4kNfBFnaHzy",
  "key22": "2VYTdiV9bviaCKFDesenVR87Wss7vGFxeN1wPpoPRXLk64MX2kw1tf12uKS4nMqQEX4mtG6QXqRJZQM8krAgm3r7",
  "key23": "8rPCmQnW2cq1fqdfKN693jLRc8VcgGEAnJtdcivrcEvRDXZoKQeiaeunjLDD9qGFeNTczsxy5TMAcPnP1nVgvgr",
  "key24": "5mt9h1v61kPCURHsgZE5138SKdVVAs23jrKjY3RGK2McenXyC41h4q7sVrdBho9g9u72J7kRgr2NsvJ26vd83jkZ",
  "key25": "2Es6Xyn5AziuyhWbHAsoamxN9CobnXLbfKr4zqxWGJjsENZJfa4dEbu6egdPvrVtFUuGu23tzC2g5y6vjwiEzGQF",
  "key26": "khs2AHr645yGfaJmkxwen23vC5aLqPy9Xe5m5bj2XdExfuBBTFFqSjU827Ft47ZRVMAsT1BEdPUF2G3xtnZmkgZ",
  "key27": "5tedbiHdRo4Yk3S48N5qybJtdKiVAe9g2ybkZNsXew4zfYdMosF9QmzaiFbQ5N17F5VjhbxcVrzAe4NYfKPqLU2z",
  "key28": "4LPMu8GgauNM4HnE3pJJ8fR7vdrnsG4vARH3QbEGktkuMe2ECbo5bxMNxbHMYrtYjgoM1XatADA11Ah3u4XGNLpy",
  "key29": "3AsqEkxpRirHN9fUpfVd2s1LxK4CufteezCZx3JXY3xJqb1qykyfPMnD1RwdLFDUNG1mA2jyeuzq7e74bWv1Aree",
  "key30": "3U7qb6qbz3BBrqgBmowqaUrxEex69QKy1WWT2DmS1B6etvrWhkG6uW26gTiDWMv292qCGGKU2a8PJAf61ccPJNLX",
  "key31": "8HREozeTQZWR1X19Ewjg1TAaZP6q4vVacT2zGnUy3KfYr83wXUC4zDBFvamtJDSSqTy85PEHChKMxggiChkwCnV",
  "key32": "iqjiJjfpRkRQacwNffGBoyxcaQubehifRCjWCeDdhc8dahHUHbPVxo5ohAA69v6KRUVrDHPC9tLW8reaRjcYJkP",
  "key33": "mBoL4NXRHGZGeKSqgduVRrCSV5jKmj6J9eiM9pVaLMEiYhm46Tx2RqP6EY5y8ckZ5Hfnr3HpZnGXVavQKDpjGpZ",
  "key34": "48TuqqRKPEDE4qNvrJVSeEtofVo96aMKbqevmMdj64HSMJ3gw4P5YKGuEWwD7KGYwedEuu2SgD2n6dXTsWvUGf2C",
  "key35": "eVhizdwxFXyypFXfopQqXNEfpNH6p5rnS1gbSAb6i9FSuWgDtJkHjvrrhB6FsXeNy1tKpK4cMjYLoz3AeK3WRMU",
  "key36": "54goKDhb5NvxEgbMg7pzW3TrvcCZNXDbVPcwb6C7XW4WfP64BVDR38eT98oV12T6YwgWwXWUGhWEEEWT7PcPTkTj",
  "key37": "4x8ywJuYpNKc6WSeUPfMXLe4vYUX3PPoabjPASCtYbCWc99whNB1SQm4TfoTCC55SxqpTu4yyro2qWwmCi4zwPSA",
  "key38": "UFLzkk7hjS2RPXz2hBZawVcsy4wLcEHHq6vg1nqUfMhWRJ5i1TKsN1uaQQo4wK8TTUdTMWjHujdG7jVzhq7JpgY",
  "key39": "626n2nLQBwvzXa3Ni1HSMj4fuJ71unMLtdVpxi7PEVSKw4HEHBdAxYARTG7Vz1uW36bk2xjFvodwhMCez7sGx8nx",
  "key40": "5cey1mrMSoW8ktvdAGoDLEm3N1YmDVafdwXHg8VkwXAFxUJEPQRvnMTfuwLV1kY1CDKeiEJb95U5sHxP37zfatkB",
  "key41": "524JgVbCPUN1im6FJ5ikiDNVZqMEurT4Quz4rwX3bxjNEadc5eBv47PpFPoQkkCH2bjXUXwB5KbQz5KuALe7iJq4",
  "key42": "r23jjJDni5QyTqfqUqkSP9vNLsXkt7E9vhHMD9A4YDn4CrZwowKSBZQiNx86sT1dtNMrMdUv2wppU4gc4fE6Aaf",
  "key43": "3LuAKT6V1jTpiF4jovU7asABFac1TMCJa6cc3DyAHBt9EMxy5LdPxnvSeDFrTkZeCYaAUg6dvFH4YxukG476F2QA",
  "key44": "5xXTvr8fRdjSxc76U3AD7Jf6qd3pTbRtGQZgziF5g6EEH2qjymkEh9Pk4vpZPUinN7Mz11UGPvyNHaMRYsG3qmux",
  "key45": "3CcDcQtykX9t7qpZThfYumUc37Ngn3Lk4YbXbN9WQDd4NHu8dgsdEiPFppxWyE7TbAzikUgQPPgqAFbMRjMvkZ9z",
  "key46": "MpQDqpMWwToL8r8KJ51mJoi5g1deJPoX96kAXnXt1EG8Ze2ykVGM7x3nKNZbZTi7qBZMhJVx3MYfcfDimv3kqut",
  "key47": "59pQCErnJQetj9yC2wPYbU1itWzSLGkrLRKLSgRv3ovop6Rd2JYABqfGs2Vf3aGa2sF6MuS8oDScYDEmqhpmbgEH",
  "key48": "4QhchBjHwxSBUir6AQqnnQfMp7ciYbbe2WAHRpCaCXKemhz2gghLo9gYRC558eA6CowrUySVhNoJKpzZSA5Z67R1"
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
