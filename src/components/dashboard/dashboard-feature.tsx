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
    "5UYpxLbRkeZhktfRbC9KMd3gRatf2HTgv9Ke4iUwJqq4fxGjPQVveBAFWaJv9uyjqcD8KZmUk1Ra1e2nysJEmPeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "617krPd3PpQsNG6emYAuc2JkQ97sq97hq8zfiLLVRb7BJ5Mb6f6RhW5UDZXffT5anpGLnkoM4Ty1xMx4QnhnL44Y",
  "key1": "3e8R8DxoEWYWGdYnWS3Nh7gv4PD9wxnUR2KpsvKNeJfoQ8aun3RrtzpVdnGXUBjUibwJJM3i7JmvGLhA92XzAhFi",
  "key2": "3YXjGKZB7V8Nbf1DC54Z25qQzmGEYzN4iJ2d1VKjKfuUHp4agiUd9chfKD2vEjNuFZi4mnEqjJKuwQEJZAv4a3V6",
  "key3": "1Q1Ld2LVAApTBD4W5BDakEQFMFJFdd3Gi2BJhaSXzUTaJyM2SkSVn5TikwvL6LJkNqd3uvsCFhLvnGP1ahxzQN8",
  "key4": "wyseZV7qvhePKnF5GbkywhQhdadeSioTb8JgU4eaCGuUzXQwXhUth9rjes8zqGic9Ugk31BARRyzjgcUHMLBA8m",
  "key5": "45V7CDa9cbZP8HsLXc51LJMrNKJPw8eaVPRwuVjJxWx5zD5HjbCugaEZ4HngWE4EcuSUXFwDZBPBLaFikFrWYGiS",
  "key6": "2jhm2GPHevL35wFwRzcKbah6rqBkdMHGskEtpnyqE2kE1cuZrkLiUrbZutknGoGQfFvnicFURCQcUHCM3no7bVSX",
  "key7": "5JrfVuMx6LFdTF1kygookYYvhEVpDd8pKxKpipcKjAcMiTiS2qRXXkxQfQ4x3GRaCNWktc39qEZ1GQargtdGPU4d",
  "key8": "2idLCEfNaZaH8ct2B5xekiLQga2qGQutY3ab7sKFxaL36XdK9VuzpsLZpoZUiE48NNBaYRKx663qfCePoa7RGkc7",
  "key9": "4WD7Lu4H8u2TJQx4onjefanm52Dwx4GiCfPKNndPEcarrqigTM7QD9fzJtsv1d6SG8y1o7sMvP7Jf6ZED3ZLTsZR",
  "key10": "65y5i3X89b712GrfTLa75k66AUTN2sj6DVoa8CMGPHCmAYNQfjxYscEjd7KprWJXsAoFFWbLeBEET6rnucJzqM8n",
  "key11": "2VBd5t6aLqkUVa52uzA3JdjDh7L2SeiLU5nim9u6WVdJTJwbQoLWRDtruG7pAJQgjtFiFaLfEQ9x78x36i7twMV1",
  "key12": "cH9Vnhm9xDorJsnk2ygY3K4a8cRU23Ko2wgxmCS2g9CtyHcrRjymKD6VDMeFwtXQAfQtU4nm6KXguMrtH5eZUDr",
  "key13": "4RpH2KS8UnybzWcZAQ4DzMFwL6qXByYviEm4yUQvVDvaMQ22ssGfzfZypvXspiXT9uAfaNU731KMaZ7TbKoTtcX9",
  "key14": "62vQ1gpEBsYHUaGUuwarGbjSbn9SY1unkLN43YuYskULbNkb92aBAHPdTP4e4FVev4poQrnbd5vMftMFa3dpYBb4",
  "key15": "5tC5nSnGQtYuwqw4mX6ue6KfiT9fjS4qQodPs4FZX41ZWBNtrW9uVjWjpDiKP48fPXPEuQ8PwAtXdhTmFP8xjDX3",
  "key16": "5KFqNb7oNTLwqeYd6UPWpQdydMHLu2cjWhe8hhnGrKQaCrWNfq2GqBVWQEkGFDjvasDDyKkhiFjbgRULKTurHe3N",
  "key17": "42VreRHhzavoeJbtqZrMrmLq5gCEn23Jk1edrGbM23XSj2CsSzCbzR3amEdZZzKYLGEGYyN6a7i6cB48dqztfJoA",
  "key18": "3HkNig8kcgbWQEh6V8dRE66uSg8g8Xrz97ANBVFsrWgmCvBdKqW25C7GXrx7ejg7Ep7RuJ1RiYti2s5EBhsa3D4d",
  "key19": "4az1wkLpZ46SR5PavRqdHWyy1yWqfa6yW8q5kyR7nL1v5yarfjREf8K16HDHmkj3vbR8Y27MWKeTVkSBJL9UTxCf",
  "key20": "5zop87aAv9qZi5UturjSD3PM6mcjNGVNFA16eH1phFRNc96p9Zo1iad3dZfmS94SWm8646oVFi97J7ZpHu71MZqF",
  "key21": "ph9uvBgLSx5ppgavspxtsYVK9Ty4zoqzfoBFE8Q5vhcPHpiZHJxfgyn8ZxYdhzr3RGiANdNjUXBWU4UFGRcLsop",
  "key22": "5pbJasG9e87pvszEUaLi362Vow4565vZHPvpB2qT31dMnBLSQoGW89gcYuuDRLD24nyfgjWNo6HjS9i9LqdYuTsy",
  "key23": "YfjjPByELhfQJq578sL22Zak5i7NS5KZrBk5EbacodG83fPw4NDy3q5b15if74nNAQNcGv6BmJ2m5P7XL9fVtDn",
  "key24": "5k6m9Kwcymb4oraDNh5tJauxiuouFFHmqZtmZ5QkULZruhyU77qAXvusMNMkusRnFcxZyKXm2no65fUgxV1BECeH",
  "key25": "41WiEyaRb8uwa5aDxKwcTUfQRYTk5MgaTcB8JEjHB28EycX71zqUJo1LEevg7K4qpSDBLFhcVWvNXBcQhvSx9FUN",
  "key26": "3X9fRdZ8UhuXSxbim2GGy1JyxYNf8EhE35Mc1X2kXfyZPiUvtgfr3Kmma3qwbxxJ9FmMapykCWbhXMT9w1ursVW",
  "key27": "Vp9ygYm72ceREo1FYaYjeJD8RJkEQVMTqBX6ZgkzsT23ET6hdbvjxWE9xaYp27WH5nWPsZQXjnszUCqwDJ9MH5X",
  "key28": "52Li9mFCZAi69Yu6vzcaeooaEW3uPKrDgZ9UKxrmn7EzEvSroTJVEaUqSt6SyauME7enGdcqY6RRxE6Tm4P6961E",
  "key29": "54VtdrrvQR8qYGf45HGG5Pb4fEsbQvn5EpZ9Ui6B45JAsMij6jmS9MP3czrym4o1kg9VzMeL8xB9HiVjrA7suEwE",
  "key30": "2VB1s3EmokX5WxB4fiGA64SeK846x3jWszbDCCHwh8q3P5SddUUsvQW7WAKJhwvJyp5fYbJU25BLnpLWTgLaV8tc"
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
