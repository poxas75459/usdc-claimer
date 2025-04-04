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
    "4JZirXohLCN9pHqiZZchSUBGK7xUrt2mR3NCM7zA2eonZ29y5JRmnFaJ5WsZyjxwghWp8953F6UEARziZkX3K95x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GNi8uMUjhGi5RAGCLhyUKcSJ2JPd8oPeMC8v5WTq4oRt9rYxfdtkp1KUkCsjE2uzKzBqeftX1wHYY98CuEnTZjh",
  "key1": "5ccRuWGNRY7DfX8PkFjFPxNmU4hHgfQwFn3d3578FQGR5RYe9GSsycyEbLUkHRsQPM7ojqSnJFnx6vSr61xzpoML",
  "key2": "XKqrGoPY7s723x4XmbWXKjCAKoM6tAdzENwzPmecgvH3WzsNQQ8cA8qtmvSQTT3G2bfuMghsWGscD8LXVbRhHpY",
  "key3": "57yqR1yLedorNm9qx3Te1hRNYbaRx5opWVfqzL4s76Dqf1hnzecjCjUe8ZsoT5LFivWzpSXcvYfJiN9NMSnAUsNg",
  "key4": "2U9N877kwztAVwyhde29AyTmn7FbVGYhSUUj5HHaZSDMHbbkckMQ5564g57v56616yE1p49B7T8YB7Voum4MJjLo",
  "key5": "YjV1dTzVPfRsJK5CKiYZVGERjarUFUXBxDyEgrGbV3Jx23bbob1q7xi1Bm3Ygyy28xXWWH46cuJTPQAesB4Hgup",
  "key6": "dQsseiHBHzLtkfcKXddZ2codCRythqTKnPUgo9GWj69VYF8GG3ejcuvdALwTJ9possDtr84P7nTPoaE21PTHGZP",
  "key7": "4mu8mmACYyPwZ1xYvhp7Fw38hYkJpgLFe9qQ7pBc984EaWpBqaVzcMquN36ExMQRhWK7AwY8M1d2if45rSFyhvqe",
  "key8": "5BMPkYauHF2fKyrDFSyqCUiNAqmZdA4HmWpVyJkDUXAsWz8iWhGDsWPojoECoNdBdLbyseRV3V266YkhfbBrAY45",
  "key9": "4399pMDknigzWSCzDHKWU78K7cbhJSF3aryqVbfbewJk5YAVPN9pqcZD7c32ADc3e3YyB1ZXCpDnphyekjPiSYRv",
  "key10": "5bRoRgzMyzKmtvu3kW5hxdjusL1bkRLLxfb1xvktGgatKj1EZk43bGJv2EyMc1mdFBvst2RKReShZTTpqB2wnwzU",
  "key11": "27Y2MFLyXYBEVwK2StCwmvj2niXSSYATMhUoz67Cv3YhGSQsiwWPacS1ZuGVg4U272jB3ka3PjsnEs8GMPJSGTwy",
  "key12": "4RrCuQXGn3poNF94NYwFN7d1pLX7pVGo4cKfXimbqW1395QHt5o5K1d1aCLSjFrdoTAJG6UmpytHimYrVaYchr3h",
  "key13": "3hQLFhhMqP1CuGWbBBq2br15Z83JgJTdF19BAEHrgHgm89gdvRn7RU9YfzVjAtginmuBFFt9DzQGNKMVqgw9w7g9",
  "key14": "4eucJHbstvR4tG8N3oAbcTaP8MvXMmB5nPE9oifdui3AfYJFEeLDvvaorBPQYctframrWq21y5kDtNBCVxaAD9sc",
  "key15": "3muaaBxyAiYRjWoXceo8kFfu6iik8c8ADuRpbUfzZn7FcpeyzqtKQQGvwGbXhKrGu1LbMzeCjKMFu9op1A49Zoga",
  "key16": "4pZug6dpU5Z1MniCZ9QTybdE9Hos71E6zg9P6kTvtmSqD4qLoit7pu6vNBZBfNrRucXZR4niL1xLtfvQMYa8K987",
  "key17": "3YnA6TwBAyUMfiQBAThw2KC4eSCYTGhEkVXhfZwc7w6CQuox63xtjaBZ7kCN4KX6o2mxrFDV4ocswKL5NJiwTpXi",
  "key18": "38Laft7VGveMoT34LPkESXcZ6zfhtExwo9CgFKWJFV8p1oykhMmjaKHrDPtXHjVgNUQ24NJCfdPTTSbC99XieXzF",
  "key19": "5sUsytirnoroFbdwz9jdrTqwyQpkodatxDetcdJq6iUpUSQL25pDy118v9PnkWjVFCJYc6gxowvRECWbpjfozwLF",
  "key20": "4PoX3rykXnyFnwKWGsXcEsZHY9YYxEMepfya867gyy1AHTEqHYj6ygSFR78M8Z7knbQ1roB9bGR6SbV8hQWjNe1t",
  "key21": "2577EfKmy4QzKo2MFFwShSCaRrz1mpAFrAU3rjXUYGwxCTNKn2FKsSgwuvUTcRzLC4Mr9i2T1YB7jMudFM3BpxwM",
  "key22": "39Vh33Pz1GmoeUjdL5jp5fPDXNVjkiKfYCYw7RYE8MwcDjLveodujfHNsPUt67vtkJMNmFxGLKsupjW5sSPVgEV2",
  "key23": "4MZWPL2ubdd6zKNEVAwypBxs28STAYYvcDeCWQDxXTsWXjS7eYM5HDkzKErzFdZ1wruTriHApc3bAmVR8nUuADkT",
  "key24": "3EroeuTQourK9EZSfdRpQNEmVourFH7cWdJmSyeZxKWBYA41p49CRNZGfdxQwTbX24QtUSYrpdYuAzVMsFX1199u",
  "key25": "4vv2TA8bXNeJWtA95x6YcRKuKaMXvPGRBgjPcCcdzxVzBZUUMRmGqHVL65HDvEMzUj8b4qMnQJQ1DgLs7FFAb6sz",
  "key26": "3hdfDSuEvgLqSVFk9McXjXvCEUPx3rySEaEWz3f4QDCzrNpXjQGSvhRUHi3iknATdtxKRd2gMLFS2adtYPGCtpHb",
  "key27": "5Wod1sNuFrgkD2CH37kVbS6ZJJii86g7r3EX2gy6XXZRz3DfC2kJ4WfvZyTJ9FpqbL3S1M1AMPFe7GpNvdGrjUDs",
  "key28": "4VXkRaQzw29QrhD9vStnq6rhRrpzSHDNoQRsysRS6gVdAk1qokUmZbiN3M64Fpa7rwkdkF5Wn5NRFtXq664CFVjq",
  "key29": "2F26Gp4m7d64Bb6Rn3HNFSPnwpF2Heq6CK41YZ17DeaQrsUt5FaNVAzM3AAV2ozwsBjhhrXeAUebADfx611QgK7Z",
  "key30": "AXzecdryFi7Yx7FV6nsRC8c3etFskyJJoiTDtvmQ5bJiZDUMzSvivrcPxQMZs6bakPXaNHV8DtQFDLdJEeeJM9M",
  "key31": "4cqexKpjEbdiuxVAUsKPYdpJAq3zGa5J1FfEoeUtETAKZ73KGt3fSkrgxMppGtyFjoi3jmuJsZ9z2p98pzwbXhrs",
  "key32": "3CXqJKTQvJLFNaZMMam34gvPcN5CTsDgabgzLhWYEANoXnsQW1qkwvb45BrNcCtssSsVWtBjYUUXu1oogH4GKgsj",
  "key33": "3gqgL2sUD4vknSkweoYm5fmvEG6MfAWqSRBiiZ6aud42B712pCGQ4pQ5uSFjDThSPxNHCGMDHbirnAZZk3TxZjmv",
  "key34": "KVvogh8WiX7gRmDFbrTjwuy2SyRT9tUDa5QhpNaUHjxk3DrLwRn5GkM4dCNbjJgvAFQYv4FJgVU4M3NKR2qxese",
  "key35": "5dKghThQUsW79BFidhMnqAxH54eWJ1fimXgrwYcYW3ifx9Jw3tRpTbsBZ3TzgwFRLbhcVNEcLk1GbcNApPVS9nDb",
  "key36": "374W6VK3EgZKGNJW74rpzNS8EENhxsf7d1Bh9S6tnjZjUoxZH5ZNUwPKNonuGXMWtFMhh1uV3rC7ZfwAxYdMymcE",
  "key37": "NVMiTc5FoAx584JNiGQmfdeQH1GwV3BmSaDqbWffbQYABYmJ3c7VMNJmsrtxW7WaskAuBUfo29DbotgoAGiBPRZ",
  "key38": "44pQmAuHL6FE5JTCz3yp3zdMGtzK55nHEeA3zGhwuCsuhk6HPD7Z3Lws3W9NpU8JruLFfycLcJKqP6wjBB6XMGTW",
  "key39": "5TyL35LsWL8eWNvwLzMWkKDhk6foAmQu4XigePns7YtvgY9bCXbJH6pXfHAtTdR14dFY5RsBwMWji74fvU8W6Qa5",
  "key40": "NXEGwnaYZpX2Sz6cDMzvZpLfcaLj3iULXe43fVThrmW3QBi5hVHCjATaqnjvq4Qu2BmQA5d8573yPUfLFCybkJJ",
  "key41": "qnC6gpas5AwZbbohVCoogdviPEpaUQbUqBZRPWJiUCkqhM4ghn71yziPAoSLufuGmQPBuJTVaweX6UNU9uu3e18",
  "key42": "3MskrHM3ANtWtXBCYcnEGydjVFP5ZY5XnZMLSAoeHUa757arHJuNAL7Gfs1iCCATxyDhisaVep5k6cfN2bLSyQUt",
  "key43": "3aXrudff1MSySTNESkm3xzpJEfVmUvNAHgqSdQiHDGeRuf4sjTVP3Sq3thjzfY5JyGEQLVhWp45gy24kPZk1ARob",
  "key44": "PjqCoUHZvevvqGJMHy1qgF2LC3Sxpyh8Yd4JGs6zrhmiptpSMZz8bgMBZjqTcWvdAiYY9sXFJwTEobax1iFTwRF",
  "key45": "33eJu5M4jjX9vKVqPiSa9EiX2nkiM6Kdk8Vug1Uu75VuHQdagweAFUMiaZWFASTp7FT5PobwDKkYFuyC8va8CqVR",
  "key46": "47wVniYRRHukkzj5z9G43cuT3bzs9WRCtt1r8xobkgRr7Qst5F3TZSf7yY9Y5M7GwGkvEB1t1crjhfxzkZCRSX2h"
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
