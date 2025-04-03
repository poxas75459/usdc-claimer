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
    "2bx2fQdeWWKoW9bhsfWMUPcY8KXiLKdFeeuLrCEfGeXeDzsQiv35b3n66kWNEqMG8wJu5PAe8JupKh7Qqn2ABLkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vavXef6g8Ce2cKaFqyhuhJWh7ypNRpaUWEsEZDPutG3uBxmA1yCo9bDpZZno7NFA6z13Tcr3dvyChuFHKBzgZMt",
  "key1": "3H3Kz6rwgkwm7PBhNK2rVPY1v4N8H6pzVdWZ7WBgLAgHhrJNaUAq2po7G2nVs1pMgQnoBb2qk14FLrq6XqGQPsGM",
  "key2": "kECRXSUT4JmUoeRidCww94opzt1zCno3hBmX5QwFHVaVFZsCaCrsdf2L2y4GDib1s4vXEm4WMbF1VW4TMRFygBK",
  "key3": "4yDvaVco9DqrFDQCfX7o65eUXCiMFd7HQpAmbP4wFciGWAEt8V4F72e1pChrVpUJDgXHJ1rNmivruscKYEBa3ecn",
  "key4": "5kA7Do6rpUkepRmYAoYrNJWzUtPBGC9gDgkGv9EDVqwGfsPtNNLELwU1Zh69xfUZsBz1qHHmbpJovaHZuFujaXQK",
  "key5": "51wJp6aYmVPARZU7KDjhVYwqT2hjdjkgT6oHXMkCHi4dDhv9VXPG5n7M6hHTcEFQ4TqkLGhHSQsmkhhVDhLVsay9",
  "key6": "jSwgQCYziT6r91rpbnxtxVzcUtv9pa4f5FxxuJfvg4kLsBhso4Kwr2PjcnsLBojYEN5KxLFBtSzBv3s6LBKruxr",
  "key7": "34aoYe7nSoKZ87RuUxaySeHGNyNamSL1LMnxUXYjrmBoxGdAz3KX6YegdEaTFtoxGXmH8KPX2EqJvr2fz7cre576",
  "key8": "6gZuuhmq3zaGW2soyAzMWd1kXtUMGGQ2WGUhDf9B2R3S8TiRxgEkPRUQZPEbTgY1pskRQaYjAbEbLW41LWJoWXa",
  "key9": "56ZJm3ohFtefy3cS8gj3m9M4tezY3YYQShD8wajaXLS1piS3zLWXbb3mKw8kmKBgfSt76oT39LCWD4fnnaAp6AQZ",
  "key10": "DJu6HfGhWzr2EMdsPujwg4ajPrdxz2GmJm5mmwSNWCBLGANxdtyNsVGJUbKNQjqGAS5Fi6YPo2ShJ6yaUDCiqaF",
  "key11": "3zvG8CLXt1cEABeNPP3LjszYTZQGX2yxyBMdPkf3XFnDZxiHT3RVNY7Toe9U5q7CubEs8RtrcUhiqZh4xSwbN5Q4",
  "key12": "RYg8ZnvDURw1HfRKGGnccGNBc3vMcFGsZwRZgur1d42Xdj4dRP2wzH3KJkcmJomZ89piQsGNgcg8jQWEc1ZkqxN",
  "key13": "odGqHB1PT1nnakUtgHbBfD58oYDX94YPYvj4esExnUQmFnPL6x857HWqstNdTpAPJ53LYMHyKRMDhVBkPt1axNx",
  "key14": "J7njtLcekAKQyrvB2M2AbLXsGeBBDeEanB9STK85ZULoRnQshYs2x3sS61UPstD9XZMAH5kHTuNQVU6uTkwX78X",
  "key15": "5KTNKf6yiyqGm6gesEAkXxBkxtxM485gSoZ5ShU66eazgQ9e7qPHnHQzZbgZA1ngH6mPrbj1Gkpo1uPuGBJvjdEH",
  "key16": "58VU2ZrhaSne14bJTPRkbx12fUGEe85DZoFddaXUkoULKBvbwBMAm1zrYcMmjvuNNepuo9Qw4TGUR3RCPSXYysgE",
  "key17": "qYeLWe5kh5UUHetNNDsAT28UwgC9ZZyT9hjzx7MyeaA6S5dDuKuFgaytDXpH7fDnhLpCs68ZPNjNaTrXP8pZr9y",
  "key18": "2Y1oszx4ou9EyELa11zynK4BFQ5RtNzFkQrq1N5Gxi8YuNGZCkx7np7gnVEiqv4e4LwLdGurzpSR22pJtyuUFuH7",
  "key19": "2qP4VfftXCvHF8HoTCD7dnStK5Bqx2ic3ewePbiwEPmQtExctztmpd179duaY8Pdih1ivqght6yiQ9XEFZaRehWJ",
  "key20": "5rdTwFcM2MPMVFumYGYg1vgZyuyAW4QkA1iD31PBDMxefat6a9S7pCt6f5gEVNed6Gzk38fXqhAdS63AZC96EMiS",
  "key21": "4aNauLpoFdeJwUqyV2JEkCCdhXM3ThCX4R7wYC3XrYKk8ChqitmCNRRB3mea3wKFyXgZ3vDcg4rjzmHu4AmAbzrF",
  "key22": "3ArgZUHVJ57w3uL6E9pRaVzWH6enEnSzcaoaH6YBaMTmJiF9b1FJuHFeH6fK69BGJFLgp2g96zha14M7yf5CoMGF",
  "key23": "3QefWLwGaUkRGWzWevdPZjLFFHLNBP5J5i5HaJdsHm3wmRmThEERAuTA48GXiLSiyBLd1beWxv8d7EgFPf68aDYa",
  "key24": "duA1rSFsVt7Bm1WTNAEstXbZD94VUWhw5Q44F6TKsWH1ZRGKMR73383SJTPCN7f419Uiv6X4UbyeovrcrjbiDZo",
  "key25": "4eFFgNZpLAD5R44xWPC9f8xLdExsv868LZgH8vZbe53gpETN6JfbrxBCJoYfw9hJmuor116n7JGhK4jHtnMoVyiZ",
  "key26": "3xwrWeeSZsyNzuJiTWrfGEq7amMzVW7UCVrqaepopMN7tvKpPSSbbJbAgJozcb9eg5jK87da158h3x9tkaztnkLj",
  "key27": "2Nz3f3uoPJA1wjKDvQZQqs26G3VrAAS1HfCNv3nTfYF8zCXCamB9eNZUZ7LiS2raEmTdi5eqDvw2yaXCYv6rpsnM",
  "key28": "5gREznCrAwWKZ9Mvrpr33ocJiKZkdeEjPiJ3mbqMxVWWbEDQCitMFVXc6MPSk7idzDoQf4gFHCHf573HV9Qwiy5f",
  "key29": "LiVLZfjbGjURdbFsv8kEtaFuSxTScq5RWEZCHMh3TAS9WbMpeRUZdJYHEXD8hcvZFn9rzMpwjJ91sKCCZoFqvC4",
  "key30": "2RUmfArtE1n4e82ZP3WWT4pTmA3rJm2SoQBDRAUYPfo14s29GQqsSBqMBQo4fNccKwe7Msn4CuMr3ZhrwMpTz6rY",
  "key31": "zzm8mgz1SvwuSeMk3Rbx1JprFK3LxEB5Gk5q853ntS2qr5vqqTSZZ6PaZdgyrZNYQGE4meRrWEuxLPscenMc346",
  "key32": "5iBuBDmAYC42LLYKFiPJL2SLU3GcUP5fcGPto8jCDFS4R8RTCNrMR3VyeTFKoGCD5Up4wbwZV5DgEcC3My86dRJw",
  "key33": "2PfLDmFmpWsKptHxXBRHCAHMp4N6Zo9yY7hpVhDfP2xppGGbim3ns9mc8myBH8q7BRYtWwRZNMMQoKnhZFyWBan3",
  "key34": "28BcRGF6T4ZPShgmfSTZbXztr92pMXDeLQNPsDSijPFs2CmVR1Y8uB68eaJS4szr226q1CNkQVG7SovfTDy9Mego",
  "key35": "EipoTgkoZ9xNk68zxECKRN4GYHtBZUJqHcbCuXadhSgq2nxRwMNzC3CxBUWRnCpo7NXebqPyc6uFTrw9xAeLF1j"
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
