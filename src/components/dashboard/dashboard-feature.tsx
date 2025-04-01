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
    "2NGXaGddZssWdKNGvwP1EKDPBWDyaKmshXbc84TATtccYBo6gSwjoU28Mjy9vSwuBqLcSW5F4BAfoZ77ZKn98dA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P1HZXPzoKxqswMufdc6tHkcmQRFh1vASDFeWWDuJSmqUEonwcMwodQXnoe6Yo4hxHeYLDrm7SaeCSWcNuTjLhmJ",
  "key1": "AqWF6MoN8Q5TGzdPZM9Zse8G2D6KiHApm4enQ6CHkcTb9uKEiebpUHWUQHcQsmzqLLCz11frDx9ZZ4pXn4frc45",
  "key2": "5MFUw6eDsi1tWQRwni5qVkrUrFsdXSwubDTQA218bZPYBizL2eDzGpoMrKHggRkmHC5aH9fgZ4C9N7bPhrYQzVpQ",
  "key3": "537CX4Uc3wZwVDFKR93CZnU9utANm8qV5sH78H5pfR93ztLA7K1L61bWrNBCASD1xBo7YKLJmNTSEF4DGsWue1fV",
  "key4": "4xYhEdvF2QRi4qHeN8wgji3NYKbkwm4G6ok9uf1arxsap9YxMVkh6N2y1mVVWsMM9gmTwEa4XZve4fMo3mLZjcYb",
  "key5": "5PGc5PfkzTng1Ur6jAWd7oVGjS9UgDVaCNA7kFXpmRxUzYwircN67TW7yfEzDJowe59MU7W1fmDdGuc7y2549tRZ",
  "key6": "SDxmbrsgyQnTyGqDhJipmKCpoMhZ5SBpQuNUZKC6NUmiZnrj2HLu2xUmn8zf6Ju1Rie8bHXx1PMRp16n9xMqeee",
  "key7": "NjyFav1bFWGt4auiisGUT4NKtUVfX3ioNjU4SXLphTKKJGgvsoX3dEgmVcPbiPBshZwBj6hnys6ghFQEdY6qY8q",
  "key8": "36zsudU65YSgxQKNDAAnDrxda61NdumUMCUeh9yemRXpUw7u5RJLovf8r4ibEMgwJxDu8AU5nDpcwSczz6GVJfQ6",
  "key9": "5xUkXHgJ2rzg1vGsnL5GpAsj3JF4vFrQLbrdFygkgruY6LYZCfMyr4nZZMNRzfwKUxUr5h72WfLzjPbVi2E7Kke4",
  "key10": "4zgSxZ7hFopBgTZeKo8Rw9EoQa5n8hPLrxBnPT8wsezWrhtc8owJnvFiTgZztz4wZanWSvhQpF9pL9BCPgo989MF",
  "key11": "3Taqpvjnz7jQTShv4Ewy1xbiDqMtNZBQH8nFTLWWzXnL6Mywup4dcfG2zUxpZ875BMtQjvMoqkcbXDj4tmE2QM9o",
  "key12": "3pNzUqw2wnsZFcZWKuxYf97Dy4A8Wui5TCzY2weBMAnPVkcWMREVRyH5gUzhsgxS8iVQufsv4sttW6TKe7UQAXH",
  "key13": "66537nPTYotqyYFQBpURXtDJU8A3QmXvZf6FFzE1WSkJVMZ5PwWSEUgJft6sazxMXqDPmpN4rcCpCzN7b1vmX7Kd",
  "key14": "46BpZxQy92WuBvthZxvGKaJz3oSkdUnUpvks2wCoFmemaYYpxvM3qSwusW8b9UwWgy6UDQG3CrV1SRZSUV4jjfff",
  "key15": "eWQH9a4UV3FkH9uwH1Cx1o61zUMbM6TvWdem3cG787cbX6FQerYRGhsD3mEHcZVim2gP6gQxCjMcZrkd27gawEG",
  "key16": "4zBuNzEFLX3osw2QUNuPYhQ5CBXp9g3GhfDsktWWKdVNgZ6pCx6aCJsw29EnXxEd3x1EfLoWNLcDvJjJwGKnC2vi",
  "key17": "sVU9HTdwDWUMod1rKW8M6oXw7JVHSEfcSJmCDNoSYs9ffy6ajKt2kA3XrBR4FQKEtzrk28vuUdQv8wJxQfavC48",
  "key18": "3jDm8z9VAAm9cUwLWh3KBaaLSoNP8P1SGY4g1K8ABSaunQKZ4QjG8xwh6shgV5g4RhgvQ4mtgwegESy52ySEnDgf",
  "key19": "3CepzQmiovNdbLrTRrRdyGaiuR8hCKTiA5rLUWSH38G9QsjcGGUdBf9zyaA6ghnfyN2pGuFeDEeKbwzaia2qjMQZ",
  "key20": "3ak8XN9q9LvVnVxBu3sxgwDtf94vaetaH54ShCzp4aGWVGZAqNt6QtdeuyBT3wWukf5bZAM3VGQhbQjX2UFtWCNA",
  "key21": "3y1uNSNd5F2Pt2kg7CrzqYdMFTo4tfxiEkZpQgQiRkhxvhMeLJkXDBSMc5xhh8Le6qkN25KGRQvha1S2tes4fZxP",
  "key22": "3YhCWV8Xm1KecghtGqQDXsoq6oW3XXqw5X6ZuLsGdXdm2cS589TxgqC8Jfy2f7NhSJizBetppoEMMnJPk9WG7z9x",
  "key23": "33mNsnSbb2AqNekRiB9ybGSeUztM6TNECffL9B3PKuzKrMKxfytcxHwyATzaB5rW5Xu2vtBBuGigdNVUmNiRZ3Tr",
  "key24": "4d2VDKN1Na8T9mPxkNn5HbXJN2WdnYVtacgkPmzhbK4EkH3nFJt998ywY1p1DeRdRWaQLBXa3J1wMAoinXXJsxkz",
  "key25": "211uqxTiSc9eSSPLYfxbJWanZfXVgJErTLuQ5RWXyHTPkuq6zXkVoqr57dMHnjuKDZjUiC5MmZzLeDpktGrisr4W",
  "key26": "566uZcjgUn61gS48s7Fk4ux1URXEmGrVbUHWCn4t6qyi6TxenDQ2qTNJHBv3WxzuGjW1GwTUpT59GjknHpg9ctqt",
  "key27": "2HVaSwgfn2ptS9h8w5epdvWrDsgBMJCuScuzTxQH9rYDYbMhcjwMJz59W45DDAoiwqWevH7oaLsjL95gtzYK9Xdi",
  "key28": "5o1ip6wxdFBszToGvfMPvW7Wybh284mpD8iusnMoTM6j4ap7uUJ3xqC2nRmvsmDprLVpevfWZXaHjE2tcUGgcSt2",
  "key29": "hzxsgZsa1zdY5usvRayyYcr792MKioQUeR6cfAWCF2d8NoFKoepnVTe82PJCdGUYVhuh3AHL6fFqno6k3kmxikn",
  "key30": "3Jfhi51Kz86CYo3iJc1PAK2eWagkyBB4Z8nk8KbFPUWc4K24A7qqzHoT32WYWyzGgVLeYw73PESLrqBLhc5ifW1n",
  "key31": "22HU1axawzNbUXsF7RQQGatcTMQszMg7ve1gRbabbeoVeHNUaqF8FTFjPwJ7yg32ryQEaPSTsJM5LqcmcZ1HuTU9",
  "key32": "2eKYSUu3GkAV1td3ff4zQGsGjbEeoHC6xPW1SzybZQhBbfNcfDmegNPYjvDsur838Ajqwk3EfdtopmZ22KaLJcmV",
  "key33": "2g5cNgdnvMz33YqKY12LSbm1UYNCwHjpS3ofHFGkApaFkxoGnr9nFsx3JrZ6JzKfYwNHxxHUd5wBp2sJDshE4aKy",
  "key34": "41PJfW4s2Xz5bSs5RNBgNDFYeTuQ4uEeM3apjG3KekkJp4DdZgu54AKjmWnmajZfSnZ4cvyHCGsfnc1mMVeHNDZ6",
  "key35": "3LQqydnoU2sHGP4Q47iXBEaMJPTbwHLdoHrLnunCt7Q16EN8Jw9piWHpdUPR5bgt9K4o3tAvApis7h15vpkmLZgT",
  "key36": "2HUFPksd1LqaDNrecpPFBPLZ4wK2iMFBZ6hcQWWUeQY4sWVRCfPkU7hpqVj89HsNZaEwSs8ydFyiJfnTxeavku7N",
  "key37": "5bgG9sb7YB572eMZzUY3TkT3sCeJLk1FmCykpytbFajPpKwKS63FhZ249odTdNyjMUkKYWAQTHtiKN6izdYhLm7q",
  "key38": "3ATDREH9EjuQWoxP1wYp5BcEj7RttqwhHwjKWjarUFGy2hd4ztZY8aLx7JzciozaKSmBoYyHKfBhCCasiFggB7yY",
  "key39": "86mF74mNKg5vVJukzZGGMuek7pSfMTZUfnnXGQUdqnhHH7QoEvBLJFea2GwUvWb3ATjiKzuZZxvas3cv4huAF8V",
  "key40": "Dq6sh4CgfhjsGR2TmnSnSr1dPfRdRXaN4PqDhjQhpVAqG3pgpTJ4nECSVSdadaZ9uoyADZkUHJvpcbgQ6JRyBTs",
  "key41": "4vKzJ2adRX3hxETLmQJX49Z2wCNiWjMRngit6CRmGxdF8vqYEhWAZQB6wZzBc6VLt41ygekQYu4hmftCXu6scLCX",
  "key42": "37ACscugcPqgA18spRY3re4EJSvVunDQCKeBQY7TtGqymWsSKtWci98o4zvSv6tkUt3AHASDNp2vxX3gZBhFvJmf",
  "key43": "3N2vtHX28n5PqMLVKhEARgLcaAtfWxf7NazaYP3UjwUAakpjjbbDcb1rgjfyv53ezvqveKCcdnE7LmJAKz7j53B6",
  "key44": "hkR9ScNdyr1ZDVcyJgjjomvoYJE1ywtP6MordvvVrHDXnutHfEA9N2sgAXifmNotvXZJte9obSjCV2EDY6YV9aE",
  "key45": "2iaSaWVNnPNdzWUFr1hgmnLgosSLGjxpADgwyyexKQSkazGUxbt3YNwBGbhnkp3Nf64uTHisYexAwq9y7UEp2hfM",
  "key46": "5d19wKywq44nBUwwdbvYPfZEcJCmm9NBUZ1zQXY9fquxBAw2Nsa5GQMCvGKYn4AzK35tDJyzzxqztkxGak2LRmAZ",
  "key47": "3CGsCMwb7bBkncHqQR49uzcK7LAh4MSWHr81okq1feSAq4ipcf879qQXT5t9wpDyMRVNsZZMViYeAKEtHATAyStK",
  "key48": "hjwqmWX1Ee4cPnZger7DG8fBaNVMo5biEXtifKLHT5a7EYsyZAgWuBN9odHNsxSLN3EgN3Pn6swY7dyNr7kSUgD",
  "key49": "uNmwoidaUGNUwk3fdEVcmveGUrT99n3BHmUGm7ozSa2Ey1VGD6QxLdsjRAdqgySUWo5sffLepmLuNbyz8TWYUVx"
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
