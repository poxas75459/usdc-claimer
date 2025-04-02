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
    "3k6YQ15bhG6EEZhnDwQ6uYiJLABKNb7rKjokLok4knHDZexUdWyLibsxs1ZcRWtoVUzeCoSBBa6BiigT5CJhjbJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SG1DDiyPmH5bA7fLKrBmPMKLH3o8Y5z6oHyEh8yboDhSiSZyZWjEAyWHtiSb8vFKqEap7cwSfowtB3rJQn9kgcc",
  "key1": "2tTvYRgo8uKCGVjJxozan5GUmkqYqM1nz2VfGsRzKbj4wWqXL9zJLhcL9JpWFaXjtmNX7s9Ws4sHtzczzD167yx1",
  "key2": "4yAYLQ3PkfAhwoSi1q7aTsVveiLAqh3zmbiUeDfaZs8kbroDL7E1avW1xpHmsWWzrHvyJhbdPzvaxGkS4dTrQA44",
  "key3": "3DzizXgpT7kf7ezaQe4d9Lg5wbjPzwQQ9qCp3Yz82PFuG4LazfYvWoTGgU21KVf8qzZ2qVg7mvipzVCidnjV7HLe",
  "key4": "45dNwQziDtRzENwEhH2o9Uf2i3Zn9p8yECdNZgMw2e1D9VQQstWKVqrkY1YWUSQEqNPSddo3vnskRHaktQA6APih",
  "key5": "5Vu8wBfsY1EViDp7em988RmQzGZHRD9hyoSrkobyjWfjt2D3WyWYNZU3Be8an9KBPvwpC9qrEBC6TV1VV9m22hm6",
  "key6": "5GaJKbEsXcH4WgbyFke74J9jZHvs9W89wTWsBXgxdZSnAZJHBL2GHNypMyjMuLvF5khcVPEKXWMLXAoX2rATgxTE",
  "key7": "5dEHFY3sjhpQ11nMV4wbj9nYT8wwXZRgwwD7hi5pWsJaFCBYGZnGdCw3ntpLjfxeqyyoRHc5G5xS1rZhi1g5NbVk",
  "key8": "5fG3m24Ybcf9Xs26hK7gPfEkmVfydmYx9dwgKM5AkmyTdic4KTzrugXkWqztSC4NYYEeArDPN2Hz35tcMDiCmdZT",
  "key9": "4oRCHasvqMNgNFESRM4zbL8QjYkuhDu4VJsGoiFEPFYxNDLGuY77ASpxeswYeLxG9FdhSKK1F7nCPXgo9Fespw6m",
  "key10": "4pmWs7CzQB5umNEF6HV49kZV2MZmJqHfnjrLRuyGRPuGYxFG2i8YrQnvh3P2DHopRARScozC5T5sUMAkBw5Jasqr",
  "key11": "5NgM7WjWUsbssZZjf9ZTdffzyj3nsJXF3MMJg8bJaAdcNJx94o3xrLZKykA4HBn2DRhJf2UG9HSXQJaoGoKpw47Y",
  "key12": "2L5yxRS5rjgHpKbKDRxCAsV1bsFXqx1tGuTsjX3Fj97tnSA3Q8UYGZybAwDVwhEjJn5RanrazC3FpCcSsDufwWbA",
  "key13": "2ieN6B7tUdRB3HC24ckZauQLt6zkqBgBB6ysXCWeh1ZgZq59cY89xfPqoa1285JShfmfsouqx9SsW9fbztTHUDNr",
  "key14": "5UvoFQvmZ78t9g55e8cgWEXGh2aKXdr3Zkw1e26E79gtGkjfkvUUa5bAqNuMiDmFk9F4aBgNfDDzkoeYyPVi53K7",
  "key15": "3z7JRgDH95mmTLNYXvgcEdLgondyJgRMWP2VP6fTFUxjTGjyafx5Ek3ZxzPz6kVihYmnBNwaiE1gzvM4acGdx1ov",
  "key16": "3LmUjxTa33fUnsccT9fozoicxsTNWKeknggyUvtoKwsiZ8avLEreVHePteUZgL26vPNCdSP8kLbkNrZnDdG9eFkh",
  "key17": "3y5kPSRYxwdopjH8fwGTzNLQbudnQcNszFYs9sFW12aqjbjqhZU7FgZCjtfz9jESquX8Ar4eDiHYdXkMfsCZxpzs",
  "key18": "5sFDRSGAJa9ELdw6Rr5Wzug4FMqx4BNPAFqZyBFCJwLXP1nrvDrFNK3yLCoUMCMs8rMDeeZdEM6ZeZX9w4nzLWX8",
  "key19": "4qe3cUQNbY18guPFYhd4BeVqQrfFwCz9KHUD3hehmAzZabnFja34BW8bHGRkLiuQj8Bmd2UBS9e164kSz8km67wX",
  "key20": "3MYGYwJTBFwuViybG3fektGV6kYvU1R4fZPFRaiwwmZsyCbeHyFeJW4fJQDFZfxMtCLm887ChmKdGZMchWQCpkBs",
  "key21": "4JiTp88JwdFCzf5ou8w2dRrFs8SN6z99NSkUg193PwysAzrDW3uwFwac7xXEJiij5TcMeXpWB2sbesx8Vg18mtmr",
  "key22": "2SkUi7TDwVd6URP6qHPfQWHo2kYJ2J29jcuVromouXx5GEYFnLhBJK6NB8afztkEetPPYmneEuBqxQ1DLBskfwqY",
  "key23": "5kW2WLAy95nZ8jekBBQycQELFnSfZqNCjMzpTy8PK5FpZDo2GtfmfRuT3pDJqhkht2Z8S6eKpj4U3RkFEFs2UVH5",
  "key24": "54VLXTGJCGtNj7EH1gmSKvgzEo6cVAHvMVQrAYRAqUaoxApKQSFPDp1Q47bB63UDjvsXonBdXBguns2H8vouTMXy",
  "key25": "4QBQSpS1W8XYpDz8ubZd8GiLwUHvaxVVXNcACapWoJyvabd5NgTWFH6LWVhub1tyPEzaF4aWFWiCAArjzRJ5DrBx",
  "key26": "5zArWey8vq2MdHp8MmqVGYtGK29cBHrgBL7F4LQc6sSUcfv1uqaGMJsxNPRPknbHvaJVFYzqEyKQRiDM2C9h5KkH",
  "key27": "5RXfKtXPouEN9XsxQqPKozGBiHnUgieq1syuPVFb2FAwXRjRLwakyL5WFjtqS9s6r1rCAWZp6Cg1jXoo726gWecq",
  "key28": "4kaHhX6TvGRYQUPGBbN4rWgmxYimWFu7DFVwHZHxpFeZqyK3Q3uX3uMCaJNdPe25JBxcUBQMVLCQ4zq4XMXj9iUz",
  "key29": "2kGdjRMaczjrTjmv1XiidqUfXus7z3VFGWHVMTrFsv3aCVB5h75uNsAnrM8BAJyrWB1X8M92AtFtfBp3SRsqkxsQ",
  "key30": "9M56RRwXoxX5roL1rG8av8NPH8PEoYxQHqBcnqux5jVm1EBMa9VKy2ZQfPvpfrsncnptLe8UczQkpwKRnWSv91v",
  "key31": "3R7kLu1MATXMMf3k24cuMf5tRHeP8YYYiXQpBPeje9DvQYmd491QEtTkwmjuLhJbcFvnpvN6Huan6Ntu2EarZjZX",
  "key32": "3y62RHt4Dj7j1Qbt9hcJbXyooxzifNzRWpnst4SgsKB4hfPsEsNEQXF642XVo7atUHYSB3QNUQFbyCCL4f5vkg7u",
  "key33": "27j9MDHmg4zpSq5zBwp7BzSrd4FvPH6B8eLr7qsWoaCxy4bmnTdn6ehcUnrG5v5M3ijEHt6TqP3RpPZQHxgLcJuV",
  "key34": "2Jczf38VoBbGRuKV43qxXKpEpY6VTm146syJ8nTSpLC2gsw35CYT8rDEpSH6Pyvn62A8NedezJFt4MBaDqz9hpqS",
  "key35": "brqaamNdfvTWRk3bJxFvwUXMcPxmPKhNfM8AARCFKpnxBqK8jMEe23EsstUynuP6RSJBModS2LHphbsLhTqw9Vv",
  "key36": "4MRgwXigScN5qgoKCJAj8PrPm8PcDcojQ3LuJrLHbyoemzz2oPiwWyiBLXo56H4SPNJF42ERD8adcugGG9iHdHPo",
  "key37": "3B1mDL1LfdiyEqqqBKDJo1gfG1K627fTDukyLcoqr2TVYwHQwVLJfKH8dBjas8nxUYm62BrBiF2FEBgxyJwcvW16"
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
