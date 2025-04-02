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
    "4MUZNmwfDHzcYCixoGC6eqYmBsHaGYNwF7pEZDg21SDDZtnweYefBg7WRhaoBG43fxWyjRSfQ6BDSDLDPZFcNty9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aRaVVQbdT7wkhpeveBN8tDiLQKZGUc4uC6KjpW9b2y9qYxRCT7yirEoNiyRLUV47EbAtkXKSLsLqAV3bsdfBhHu",
  "key1": "EtqKGGwo5KWqkUahbdHm4bYARPWeNnSQxe5Tb6jaEpJQyjwBhABDLefueg2QUMivcyxqn6HVPTGKFQPGrxS7AqM",
  "key2": "3MsWdNtSCkw7NmHc3RtvsRRdtRSArwxpLYpfx1NWpNvUmNnGMg124Ccmefyx3Ejdd3uVvKZP3ULWaXHhRwZDgVo8",
  "key3": "3n35nvedCcQJU4eiDHChyqqg6SvQ3t2i3C32AdzixSBeyEwWLYGhMAh7rod4hapD74sPXfagG9jWcgD3rdqAQidm",
  "key4": "2ckygb9yB4Gudp8tFTTgEk4fnPV7o8f8WLTdyZW29htqBWBxDv2VXjzSky1RcXD3zAr6vQa87QyBRVT9aqiuDTW5",
  "key5": "5UeN2QbrSA6s21SeFzV6yXjrF8NBovpTqVtcSspVtRsF3ftbWNsHczPJTAidJwN5GCfeMbqry9dizLj8zuhazeUD",
  "key6": "UsTf82f1ikmkU7LxU6vqsxvNSyfUrKvDdAHuRXFzfZZojdc6oFtf7bCyakbhQiWtRdpnEB1dDSqCAExNKZGMM7y",
  "key7": "5dUHGs8BRudXYUPMrNuFcyJTirmhKgdBEZU24kjRA9BwXvq8mybUeW4DuEjFVTMqVvyFuEDrZfeBxzaBF3aM3gPV",
  "key8": "37y65cC1yisJskqmJYfjzteTomkAVguDDHckKjqsoLHUch8zmL8es6uv2TBwXXDiNGDPaT62ota6Pt8kAesgEqtW",
  "key9": "2cBDqRsHHcGpVZ51i1sivSNMdzLYjPjqFJA4qpoGegf6GGrWhruQS2cTH1hjSmPhEYjKmoRhdidrZ5sBJqs2KWaY",
  "key10": "23EoBEPU4y2uxqsSrV2VkNFZPc6nxT2sD3c54mNFhFHzkngB4ozwZjLNojKjMBtMepH9jPVTiBgkVkEKypp731Fn",
  "key11": "33vxLtps5Rk2ZKhXLsPsdBYYzvbV1S7q5H6HYheK8ycQLbv777ppw9MQWTFTuZs2MwQw9ZXzWaoFV91wytX6pBn5",
  "key12": "659P4syupLZqMAY2BbYRZVTxAtbcoVzGtA3gdm78FUdMvjikYup2kUxAtgxBHoxKHrqmQVq1B6P2979P5SanaKjk",
  "key13": "2hofFYfNTMGcpcYmADcGpRjSdMiVA47qqW3KpWZpcvHphYVchoqZtyZukVQV67o9jkeR8sko8tjaWH76ukmFszYf",
  "key14": "AcJhuvyoNmNmmcPLeDbyGiA51M3X5w5EHVr7Sjck8Jbq4g1bywgnVQsqHVLU83yfayuB9NNck8XCZS4yP3DX3sC",
  "key15": "J5ppZYHCTPAgXgfFaWufw3B7bWcC8AMjMPHmxgSx5JXCVWsWDCbetAoH6LfYe7BB3ixjyVLPUjbTuzGDo1hFxZX",
  "key16": "4huTgNUDJn6jhvvmCWQB1uNHDBjF8TS2ELtURkT2yCQWyMayq3nLsVbYhLVFUiu4BmrxBBtfGjsyzyohXpbXCt4v",
  "key17": "4PhoQy1Ru927mHTQVHz8Tg6ZvCip5Q6yXc5JANVf89DTVknEudwyyWKWoQNGY3ajDhT2L1GeDJE15MYw9iFjbYya",
  "key18": "xjUPfdMxX2N4nXQ3tWdPkiT8VwFnxfmmiNKZJUg7T3QYUCkeobuGb1W3dJNfoxtUMuYcA1oeHbm4GBPpRuBX9j2",
  "key19": "5bn65FNw3cednm9aynvR3iVuoYwS8GQVqQKjAtUr2XMZ4fmb3XDMAqanSLarfuR19aAuP7AGwNStJjW3Vq9r52HF",
  "key20": "2HybhB59FDCdfs7sBMMaWi75oofhaQPbEh4u3kRVtGrPeBRRSTmQG977q1ugUSnD5jNZt87bA6sT4wWzhqS7UxvA",
  "key21": "3cxE4mC2keEmqmHSTaQhYKcjpawBVo4a3VtBnrJEAoMCZFYKEBrnvtyQYGAFoCAr7o3ciVENSVpnPgVSsjVHReaj",
  "key22": "3Y1TvLJHxwwDdgdKZFd72niVfVbYhJyVC1WHy2HosDzHDWUF5szYtjobRyk4DN58xb2U19AgATyihkas9qT2LoyX",
  "key23": "2VkNLTnVyuTAKjDYUo3EraQExdYoofcTsHwf5rn2Y9M9RB8abT5vHqvVC1uJsMZ7qWDTpeb3pmk8LJJc6goLCs5A",
  "key24": "5iqE2S6LuzWo9UECRjNvvDy6bJe7hVrEF9ADCfD5R1Bx64PVcmc8Txw7WA1SzqB9BLGqAaN8xHshh36Tmr2iYWTH",
  "key25": "2gSSSwbcGeayrTcYzzraq41BBnxhRWu7wKqroVTjUX68BMiYtSfRXqDUMj1HAj1igGEGQyRLDkNRP9gYCydLooii",
  "key26": "YNSUFJiBM9J4gV2NKh2rrotsJV9M5bK5xpEH9qnGj9PYE1cihn4kaXN5GN7xguJMrBFEPEcu2a4hbij8X2A5uMA",
  "key27": "4T4qdrzKx2pXqybU222T2PguJfWuLKppZeUrDVRHkZVtphbqicryksh3sD813Z79HJSN9H3NfX6JrshE5DpyzwVK",
  "key28": "uFV6sDgxumoW6yNMqykL7NXPqYt7CSu4FcW4xxJRqWSRVksDJnU1fwVgTpHSqvggdscetHaMGkR1SXn9fuianub",
  "key29": "2jQDwJYMuE1hnhcQhYC7MH1CRuPRxsfEmwWKbrWE9Rifqdr3nzrHvjNofNAJKYKPk1mBrjBaz9RvsNRbDPf6dgun",
  "key30": "5ZukZDkcCAcr5JGgN53Xdnxxjdymd2XJTgg23CSeJuxeeD6buA7WpGKZMrYFPv8UFqybSRCMuapeu48rUGM3r98j",
  "key31": "4pcCgcbtG9kMDdS69UgpwP8Djm9zcU9MCkLSxKGPtLj79FXBBjvvpyfvLdLKeBjXT5ya3ntXn4cXfmEK7L5yz6A2",
  "key32": "5oRmrjGHRnMS6uNEHXwy52x7h7D6iEPmwDEjnqzHb5RPMPXJsjzQWGScQ1oXA8vurwHjF8AhqG34GvkSVU7pk64f",
  "key33": "27Ui65EqzFziJtY8cPbhq9TyD8kAHh3Y38BHLGjb45tE4uJhPHWpfEr1pC1z3HvsoSjnZt4wBUmZ4Ui5gh8iVFvV",
  "key34": "5hnxx2NenDG6vHsjRLg6gjimqdLnpQ72bKSrVNrcAV2x4tx7wbgqnpzxYvr2r73A5A4vr1xw4eiAPEsifux767fJ",
  "key35": "48uf2xidF6wkUjGqYh43Mh7PXEEuj3NC4dnzLGvzXACbbLsVEBRx4KV5CD7w2NtHhKZMp7qQ6Rv2UnWsYEJQ3F1h",
  "key36": "5hbodsvuh6zRnJUrxMSuAiJZhtK95z8DvH2hnrtA7gX6hu1DRaRKyzcCb32UAj1mKhnL3ZAmXzG4wkC8VxgEFrEM",
  "key37": "txGpzGDPdN2sEZ6Qroe5zMTfDvzYQSfWhg7e4p2HFHVAVKPvKubJy3iW8zBHGtn7uCW69dwVBoMmw9oYAU9Ts3D",
  "key38": "cKpY2um58CSamHCfjBnq7J4unW7h42MTS9NvYvnxh5tra4amNJAtUEaBUnCd2erRpGZCXdDNmzSMMotT8CXUaep",
  "key39": "2HnF9zmPy1pcBEbz9rib2Szsq3JKpePG4uuJ2zrPhqHwe7ShQ1Mcc2Eeunsa2AvVSVJ8WyATfPy7DZKaPB8cELeg",
  "key40": "2znc5L6DRwBMXGkbzedodBoxCyZTgDdtumgoxFpEznFKjs3Z9Fz2t9i5BWKNM5MkV2pkMCGPtNNt69JiVVKfQkzu",
  "key41": "57NytAbEH6z74BRbSYw6LnthNtsYv86jTosCc32tTmnCF2UEsyidR9y4N3ZvfQLYW5bVsQaYKM6aar2qcmdwug28",
  "key42": "5aYfNFguN2ABCSnXPAJi4kx8bk84xhqpozk2fjrTfopKwUuU2kWfJePbBiiVok5LnZj3z58TkTcUCQkefREbC6r5",
  "key43": "5ye5g7fLCPLS4paBBinCF6wG2sSYhvp4D3Jemia7k5SK9aSdCvg9nnNW6PYpfeto8AWXTgSveS1zLgwTmkf8iBY9",
  "key44": "5LUiodDBurPfdXhzV3MSvkwWBhvMpds1NkHu1cqMPc6RHmpNvSDw6DxkikQrjmh8T82sXYpQpez7Tae2gcRXZHCM",
  "key45": "5DoqkFsYdjY2zHCVCp2vi5SMZRxBjX5fYNqiJ17TLoQyYAKsdp7L8aPADrK4hHf7YgszC1YoofauKg27LmxvEQwc",
  "key46": "51iXTEvytzb5YqmyuAUydCfAZR9HsTDTCKdTi3U6E5xRcUsMdiwabBcadb2oZmdTgdhsF22FEH65aCtNFmKCVWup"
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
