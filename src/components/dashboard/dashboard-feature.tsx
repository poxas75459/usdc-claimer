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
    "5aNgViM8p6HyEH3vqyRsLCUmgWo5gu9L9jJ88Zenyozv85m5qiXzfa3D6VrXvhKqRHyYfs1tnUiMPkvDPw7S1Meq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bb27ZxhFcArSnKueMddbqu8tFiMfYKQy8LExwGPJqFLNJkcDBxQMSJPLFtRUV9nDyCBgzcCc32X6C1apeJhzGKe",
  "key1": "43XjPL5nh1Nijak17sSdU4XqndndDKDzxtyKayJ15zH1PKpkQm8FS2viMGf6P6eyCWrepxB5XnYkCZpnMqoHGnVh",
  "key2": "5vGb7snVS7YCo2HXphzrbgcL1PfNME3qXkq5Ju8ZcoA465pYaFBbP2Z6aaRFtNrecF2HgM7qhiYTYagqtFjZkgoT",
  "key3": "4C1UrVMjDKg1Tcecvqc87BaoAWkDen3WvdvNYM7vgWPepd7TQ589mHFwMcjhmM7H1A5VGC2f5KYLG9auWHpZvZHW",
  "key4": "4eHzvvZU68i25jBUU3hSBnxkMqabznd3MREkm6JgWTqKC1KtbziQvU67C4Eg5EBzMFYcEyArywhAgZthJHP4SBPv",
  "key5": "4Jd1mST4egJLAQnJvTHspwsYZh5f2rYpSPHUcgSaQZW69CmW3ubrSvVmZ5qZaxTf7U1jVagkhm9eKWdG3Ztd5bgS",
  "key6": "3LgaYmRYShj1122sStzLCjz25Pb7bAtLweKmeUj8uQrXJY4Bux5beUs2KCZVHApQXvSnmZgAB5sTKf5VV2AdJbEu",
  "key7": "4sSjEbktuZg3tHJ9jEkySGhKVeujdQCWXa5dM8HVbwouZ85WP7oNq1LFwVXoWtg3pxMbjpxxcviEYH2kYcaeJoJn",
  "key8": "327nRSe7SREL8mvtB4LggXL4tJvupc7AakwYfdWyf2EfJoKCSWMyr5FWubva8XkhYAArwoXpzQfuaQwKLuDLBJw5",
  "key9": "3cwR9Dm5cktm2LGLBU55KttzMYPS4WwtkGv93x6kBKDhLYswBa4HEmVy7t5Pg16hhKCYSnvDahcCA4Dqot6Zvvep",
  "key10": "3CsjhSrTsqpaHdidkNJYV38oLaaJurAMA3zwDNk58H48kcU4RArseR7xtzLfSZN5rKr677neTPr6BSawXuoVH6yk",
  "key11": "7FTejv8uPru8PpjA6ZbHNBVmEm65otgMmQFtpG8X2n4QqUo2x7p51YN7s9Sg5GJabfnAmha7pCzszAvmjLBLW7d",
  "key12": "2uKz1Z85WdapGHE4P3dQq8smSWWRATy1EaavRfBVFDaVGuxYLFMiksGekiUm6uWLDFTpJwr1L57fFWVWmbK25GrJ",
  "key13": "3fDCX7J8VNJwXW8WreDLUGaT1XFFAaQgXzypb8fRyp9A4xr7h3nBDtosFwdbfSf3rHG5R4kbEuypqk9F6fC4Aycd",
  "key14": "1aE22k85A227EntG7BHby9CuDwQqiGQZ7umhpbEtQVTWxgwfS8hATV2TbhUE1N3H3E9bniixVoGo2RebdPXoVdw",
  "key15": "4rc1gXu6jGp9RF5CRK8pR2CjzeEiHETa8EgiMxDNER11dxNv13JAimPMMr2MQ6wNLY4Quyemch6htbXhrk6VNP19",
  "key16": "2NSmmNyhWsH1rttYbegAnLkgiLaTDisoJkArDA7qX5adEr7e6hRJ3SKPGHamioq9Hudj281mdjbByCUJEpJ77fAz",
  "key17": "2yMAtQQh4ehNmvFxeRbMjsXSv82LdPNKkoVjk3sFTmR9ocPt4jrvSYp5KDC9FAwywAXCJWj4PK4QDU7L7o1sTmz7",
  "key18": "2ZXhNMv3Nj1b7iVGQwCbJK7Tkmbizsh1W6J9gzSca5NFzEpRuqnUf8yCPMScYqWDL2KtVecyVHcQaRqmWcHLqfYn",
  "key19": "2FHiU9ieJLKUTiXrKMwmZ2YtHn99tGLhoVNZHEqQchw29LkEdXEJVNNpUsDK2njtebmt8GytsWpv7FxvT5nkP9A7",
  "key20": "5Mrk2ngcSBPivcveeaD1Rb9a5gDVuQ5UebGyGjC4W7mDribZHy7H98qAbgwLDE4CSMeqBADjDk7arnadWHUgWHcJ",
  "key21": "3W8ve6xViA3EXL3tBtwMtAmgVh35UZnaNa6N6TcgYCHsLvNZ8zUu9jVa2i4a6A8zS3HggxN2prVBhuu75Bh1P5rm",
  "key22": "353aXE8UnxczJhp8hba9CVmpoQUDB5roJDVh6UAZeFUCSQ6Q6BiLYc9uKS62QbduKF7muitcQmwYHEsrvgM74Zjo",
  "key23": "5Xvta81kmWWLPjF2yRmvhFpLWJfAT95Ff7Fq6Kgx8AxuX8Mpj2237N4TLBqnoSTKvqnpn6Bi93dfYt7TkxteqBko",
  "key24": "5s9rhQfLau7yQGR6C7ZetefjrrByXmTYhFAz4DQUucZ2GtKMdrymTHew8P2JxLahLyKKQJmQ569JabnnXqeUXBPk",
  "key25": "PLfFrRgxCFfPWgHez4r8rro5yUPANuzUVc3FUzmy6e41YUTxJWNZyViN9ptgQSR3ntQc65KwrF2J86cwP8s6Syv"
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
