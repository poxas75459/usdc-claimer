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
    "497KueMb9JjAorkdekHtq3nb7R1exWMU6aX2nfHb12mRufDKYUjwg3ZRwfJDtRnrk8b7zhxjZ9ePQj1dpGaZarNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZvmPgrM1bcaFpTMk3bh1MmCixfZCiLy8QK1ULK3UepbnsZDKnmo3csBXMMDLJseC1gUxkGiBbGks1XNzDsqU1PF",
  "key1": "21id4XPFGm8DQC4rXPpHgbNfbtLQFTjNC3Eny1SMtnyjFyV8tgHZUH4ouXJ2UnnDpSKGQJbVe6m1drzkEpcYvg4L",
  "key2": "3UYa5oL29ge2qL3nCx9fUB5aZqgSZRP73BLSTpQ3CFSrwjcoBExSrdDi9TAWGKhQZiRtvaSDMYCaW8ZLfWKaGJi1",
  "key3": "4x7yTcsYYk4Rze1GXTK55xhRp54w4edvxyrDChkdaV8nbyXU5nouHLGsKAQTQ5u8wJV2d1Ei7tWQ2kWHp5TDxwfz",
  "key4": "Akd9biLP1dXbZVCqGqT48zAxvkattQcS36bR84AJwho387qvp9t4LPvEJPfJiiMeWt71hLmKdzPd1R93x96CUEh",
  "key5": "2BtfMjodbcerSE4E5gWTn8hX4q3pCpxwNKwwL1mBbf9nKrbwQn3hCrsVjMk7yjEJusv2y2UmbF6ub8oLtuGNc1fM",
  "key6": "4Z11AumAn881AU3wKuQvNBVLE7gszG31xh1bAzdXdF9fDD2XLHcPr7uaKRBL6BcWWRQazW61A69qCVTenyhvUXE9",
  "key7": "3M28ERNA3W29uMcfgAc56rzDTKkbyUj2kJ8cDesPPuacxZz3YV6hwWpHF6SQ1QsZnDrYJV11k58UMznq2YV5q3o",
  "key8": "4BPraseWEjR2GCDc3b9wkyu2xFdWQAGANWvz7gUkZmmeyqJjLng5NuNHzoZacSmrz1SqXNGtdbFyvkoa2HZDQmwD",
  "key9": "3pXL3QSuPK9ShkFfyjD1KChPBMHeNhosAoZtrGxUs9CSjF6Bb827XccVMrDfqtnDeQWFeHHd97im9Cew4VyQWaba",
  "key10": "2i4vb319ZWrSbEVV4o5kxEV3fHx13W8FR6Pb8VtY3L77Zjhx3gN2fG7Ap7xr7aJcH1eMoRYcdE8nmepneT7T7Dx6",
  "key11": "5eGAQPNsJFqgEPgPpZdipcE15Z5uuQGkvBNbfQEyj1HhYgz4ABk61hG2y8kin8LZmcN3T6VoaB7PW8WFBWJh3J3H",
  "key12": "2YBLXZTw987u3F4yCN7weLM8vyisGo1YWg5pFkogzR2QV9LEzKt4jN5MPHrvdr9b8m1GaNeMPc6gpgCPXqdwz7Zr",
  "key13": "49vgGcppFv1HowcoPdvmm1MZNy7uTb9jjDE8U9HiqFbePitoDDTshGc99H1XyqekViaueJfKAaaSuf2QcytCyVkT",
  "key14": "yMUzRXhTgsSHE6z5xkVZD5hKorW3tZDQp2yhEsQ4RG3LfnyP2ppEUsXujuEeoccjvCJPpeqGE3BjRH4VG3A55ij",
  "key15": "2UQ4CCPVYxq98yR9ewLcCHfrizW81y2peiAT4ZyMBPaDDR2kfo6oiSW8JPKj7wvhPGcoK3TTJfHTkoHiHZCG191S",
  "key16": "2Kya7WmmRSR7qa9eJHKehJjsLsNPe5Ha1iCugxdihJb2ru9StLH8HEq4ZsczvxPE7EUGJ9joFr7VUuN2kgHwnbBb",
  "key17": "3BJniA78sDy2cTxgnZQyohaunzPCHPqyTKoUmV1yzJRZtFPC7E3X1RdLX5yi54ZaKqZFrbqgPcVnw1aZgGnDrsNP",
  "key18": "2kXQmELcv3F7HKfqheiauveWwcogCHPtzoME6znsL9Z1BwKRUJ6UH3m6y21WRFgWmD6de7QUodjzdwHZSddVR7Ge",
  "key19": "4Lp6iGkPKBoSn83i1XSjQKnoYaXvsFBRYxQGVQvDqeArd3hcTQUJgjJhibHSo3PR8QFRgGEYjAjpeyG9wQ1Mdvb1",
  "key20": "5zyJkvbx3d683PEB8Y7coKt4kJXrhrzGkGXbpHcQjg8ZH1fcFALdunpsHoYtcCZK6ppTWiHjv7kLzRi53wKNX1F7",
  "key21": "bpiqVe5us1DgJA562QoxqB1yjUx722y2Wt8eRZzzvysoM3du6sd6ZFrSwgDS8SKGjegfMcsqYFkwEgLTAKVcoae",
  "key22": "xiqjZZqoZR8zugLV81nqhZY1HKBe1vUPBAgS3ccEZ4Jfo8G4gyy5VpqD4ayFzD9aPM7fBHC9NULjvAE4jZirqRL",
  "key23": "2xPiqiAmLkZ76YqihZzXsdGnFVGnSVEqA8k8XsArkQL5iWT6B7JAU45PGS5dK5rW2CLLpgkwJJVSFee3E7usZLhU",
  "key24": "i1um7TRCXBGXKhVEAXBR7VyzZEdKrFe8fYr4HSEpD8C6KWpVKWqhJHkb6oh38ktBuYWsHqpYUj9xRuUf9VJub5r",
  "key25": "3NQ7qkipCfDcjU5JyDsmE5MRuYUywXsSxFcHHnxJ8RabtGfUScqadjhyWKNK1n7QSmxgB4sb7cKBCkUnH1HidV6e",
  "key26": "nv7f5pgUyag9vH8yMySvjKax5ek2bEUeMW2fk3QXtrZC3vZig9pgNYm6yWQUyxeWUHQ1fF6dEZMb6FSU7k52UFm",
  "key27": "5c23Kf7KweDPzs3A88PYBQWzCYsU51rbnq13CjwVVFGvAHszsNBfmmPqKPMeUzMo3Bf4yBGu3FpQqkpfTMTNhSGG",
  "key28": "5vwPEpJNrRCosnBXqHEyqbmDmGqtiNEYp1jj4kY4qFDeiwfEY6pZcNzstEXw3agvLysaTSETsFXUfpDnBYYxaHQp",
  "key29": "4kerr8TgPecy7kR5FkwtfCfKzLCjysuM2u8AaXpZDpUvasGgU45NpXMiadfTggYqPZ6AH4nMj2Wcih7DY2mfphBi",
  "key30": "3SMbPECCN7XYDbzNFXa9zrgC9kftRwUPbgq1vmwLS4sp4Py1Sou85b5HWTjBdaKHjfot86TdAH5Nx3qiHqXwPmxj",
  "key31": "4ZgU5nACm8a9orbzrwdwXteg28rvf7gatHLfKie9xdwUssWLxPpbvDGckQrk3HnzWjw9Exd5aRTJT1qM5fC61cTN",
  "key32": "V2eBfc214xmfEPq43aj2u7ECvTLAsq3auPRFkVjTxTGSdC8rdRR25xUZkyLeEbq29cuhpcusoZV4QCqqBnR4kGf",
  "key33": "3wWHuP7vdiKTBFuu58u7vta4z3DgzdNPR9bi1pFXiaXmQYuqRidoCzWJADm9Sa1U8dTxfvAUuGTwksf9VugXc3t9",
  "key34": "uUAVt4WznPmWMwKVfN9EynSax4xiaghvu82sw4DCM8xakkYZjt5sqehprLHRk2akAef6vMAkpwpBJJmPS45o2gk",
  "key35": "5MY76PQEboUynZKmNQo8K6KvLxq7Dcye1JitqqqHC25CM9jHLskbDw2FaW66V2bMnoPEMC3qdQvNXm3r3UM3JQAY",
  "key36": "5gDg6HoTKVeYwhK14D7mLm9RMm3BkwZoFWiqqtC63Le3CcausNmpytTHH27Korq7guEHiAqrr8SUpmESTSHnNzEs",
  "key37": "3dUVSpp1LXs9mzm9Sy2mJ4pZv57KMgAzqtgThxMCREfqUzoQzPdcvpHwwjz1YqEYNDZBC6kc2n4GbcfmMY3z2k2k",
  "key38": "MXT1ymVW15nnQnhxtZ6EyhGXszTtMnGeUJ29X5Q119QPspNSJzW7divw3udxuaLakL4h9hyakH1FYLvfwrS2qro",
  "key39": "23UcCmForAeLVetf31agW5g11jb87gLtuJHJonrVTL3wCHpG9TANfT9s3UwWrEvmQ9xBsGDYP4kdCxCTC7JDYqzC",
  "key40": "5rdiTmfKWXqWfx78ZnKaSXP683PUESGpVJSaUvWGvi1wKpaXGS9HaodouUPskKjmXLkAC3m3ByrM4qcGtbjnzLcU",
  "key41": "2y2zVGX3bw97hRynSDgNHJ4DpUNL4znZPdKQGjTTwYLpyECcHHGGq2KYiaihqEKY7dEUqV5vLAhoGNUzg6SEJM4Q",
  "key42": "nWBvBKVo6A1ksfg846JHmWExqqgygwQJ36W7p2kSgyZ682NsV4UhqDhzfyTFzSXnEBCJjeUq7bK18xp43eu9V1A",
  "key43": "618bZpS3YsmXMZtzCLzae365jKd44yXZzzaX1dMGrqnUQYqts2r3T2BQUnJmSRnd3MPzoFDHi15GukQWGvADBC7m",
  "key44": "3Z3k9yPTEmzoMdoSoDLy443a8tRn8A5GA8itZotZGatpLF7WGMRSHFqnXxFSrCb2pkF8gu97GGFRiVt8cmBqxmmz",
  "key45": "44tUCgR1WN2LffWvcHBvBRLMVfj13vkwmZ4AWGNC6SXYGdQHj39VJLmM1AWsLPt4NY34nFW8QrvMkr71mpzhb4pQ",
  "key46": "Svyq3i8ort9esXS4MTLWw1JVjsKMuF9DJkJsF7h5eGwp8ARZbAa4pYktkDkhYXbyqkGapEStQCmUf5ucf9cMYwT",
  "key47": "5JtoT9x84TDZ7rfyECGoufrhsBPLetidiJLXCs9LMZ1z8UpuYkca8jK2bMiqF9TALj33WRZDggLpjDmzQJvcxFrH",
  "key48": "5pLNcgYnEbgVmpazPE88XuNd97ZmMV6UPGXHxnqLhtY7F7kndMDRccwhrk14DG2e187n6VKzCFEdfs1TWLUBghUv",
  "key49": "i516HswkwvZHiAy5VcunoiHTGchgXTXjoWa7z77jc2jmWvzbC6AFgXY8uwUPQ7Q1BCFrZRUCu5zgoL9CFDizHdg"
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
